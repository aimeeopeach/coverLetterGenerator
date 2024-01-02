import { AES } from 'crypto-js'
import { AuthSuccess, AuthError } from 'types/graphql'

import { findOrCreateUserByEmail } from './users/users'

const querystring = require('querystring')

export const authChallenge = async ({ code }) => {
  const url = 'https://www.linkedin.com/oauth/v2/accessToken'
  const data = {
    code: code,
    grant_type: 'authorization_code',
    client_id: process.env.LINKEDIN_ID,
    client_secret: process.env.LINKEDIN_SECRET,
    redirect_uri: 'http://localhost:8910/.netlify/functions/linkedInAuth',
  }

  const res = await fetch(url, {
    method: 'POST',
    body: querystring.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => res.json())

  console.log(res)

  if (res.error) {
    const errResponse: AuthError = {
      message: res.error_description,
      __typename: 'AuthError',
    }
    return errResponse
  }

  const profile = await fetch(
    'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
    {
      headers: {
        Authorization: 'Bearer ' + res.access_token,
      },
    }
  ).then((data) => data.json())

  if (profile.error) {
    const errResponse: AuthError = {
      message: res.error_description,
      __typename: 'AuthError',
    }
    return errResponse
  }

  const email = profile.elements[0]['handle~']['emailAddress']

  const user = await findOrCreateUserByEmail({
    input: {
      email,
      token: res.access_token,
      expired: res.expires_in,
    },
  })

  const cookie = secureCookie(user, res.expires_in)
  console.log('secure cookie: ' + cookie)

  const successRes: AuthSuccess = { token: cookie, __typename: 'AuthSuccess' }
  return successRes
}

const secureCookie = (user, expire) => {
  const expires = new Date(expire)

  const cookieAttrs = [
    `Expires=${expires.toUTCString()}`,
    'HttpOnly=true',
    'Path=/',
    'SameSite=Strict',
    `Secure=${process.env.NODE_ENV !== 'development'}`,
  ]
  const data = JSON.stringify({ id: user.id })

  const encrypted = AES.encrypt(data, process.env.SESSION_SECRET).toString()

  return [`session=${encrypted}`, ...cookieAttrs].join('; ')
}

import { Image, Text } from '@chakra-ui/react'
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

import { useAuth } from 'src/auth'

const LinkedInButton = () => {
  const { logIn, isAuthenticated, currentUser, getToken } = useAuth()

  if (isAuthenticated) {
    getToken().then((token) => {
      fetch('https://api.linkedin.com/v2/jobs', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then((resp) => resp.json())
        .then((json) => console.log(JSON.stringify(json)))
    })
  }

  return (
    <>
      {isAuthenticated && <Text>Welcome {currentUser.email}</Text>}
      {!isAuthenticated && (
        <Image
          onClick={() => {
            logIn({
              authMethod: 'oauth',
              provider: 'linkedin',
            })
          }}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
      )}
    </>
  )
}

export default LinkedInButton

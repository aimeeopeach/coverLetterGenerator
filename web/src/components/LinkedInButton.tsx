import { Image } from '@chakra-ui/react'
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

const LinkedInButton = () => {
  const loginWithLinkedIn = async () => {
    let url = 'https://www.linkedin.com/oauth/v2/authorization?'
    const queryParams = {
      response_type: 'code',
      client_id: process.env.LINKEDIN_ID,
      redirect_uri: 'http://localhost:8910/.netlify/functions/linkedInAuth',
      state: 'blablabla',
      scope: 'r_liteprofile r_emailaddress',
    }
    const searchParam = new URLSearchParams(queryParams)
    url += searchParam.toString()
    window.open(url)
  }
  return (
    <>
      <Image
        onClick={() => {
          loginWithLinkedIn()
        }}
        src={linkedin}
        alt="Sign in with Linked In"
        style={{ maxWidth: '180px', cursor: 'pointer' }}
      />
    </>
  )
}

export default LinkedInButton

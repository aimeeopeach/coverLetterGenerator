import { MoonIcon } from '@chakra-ui/icons'
import { Flex, Spacer, ButtonGroup, useColorMode } from '@chakra-ui/react'

import Logo from 'src/assets/Logo.svg'
import LinkedInIcon from 'src/assets/tabler-icon-brand-linkedin.svg'
import MailIcon from 'src/assets/tabler-icon-mail.svg'

const OPeachHeader = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="12"
      py="4"
      bg="gray.50"
      px={[4, 4, 12, 48]}
    >
      <img src={Logo} width={142} alt="logo" />
      <Spacer />
      <ButtonGroup gap={2} alignItems="center">
        <MoonIcon
          color="light.100"
          boxSize="6"
          cursor="pointer"
          onClick={toggleColorMode}
        />
        <img src={LinkedInIcon} alt="linked icon" width={32} />
        <img src={MailIcon} alt="mail icon" width={32} />
      </ButtonGroup>
    </Flex>
  )
}

export default OPeachHeader

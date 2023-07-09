import { MoonIcon } from '@chakra-ui/icons'
import { Flex, Spacer, ButtonGroup, useColorMode, Text } from '@chakra-ui/react'

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
      px={[4, 4, 12, 48]}
    >
      <Logo width={142} />
      <Spacer />
      <ButtonGroup gap={2} alignItems="center">
        <MoonIcon boxSize="6" cursor="pointer" onClick={toggleColorMode} />
        <LinkedInIcon width={32} />
        <MailIcon width={32} />
      </ButtonGroup>
    </Flex>
  )
}

export default OPeachHeader

import { useState } from 'react'

import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Textarea,
  HStack,
  Button,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import OPeachHeader from 'src/components/OPeachHeader'
import Step1 from 'src/components/Step1'
import Step2 from 'src/components/Step2'

const HomePage = () => {
  const [selectedRadio, setSelectedRadio] = useState('url')
  const [aboutJob, setAboutJob] = useState('')
  const [aboutCompany, setAboutCompany] = useState('')
  const [resume, setResume] = useState('')
  const [cv, setCV] = useState('')

  console.log(selectedRadio, aboutJob, aboutCompany, resume)

  const onGenerate = async () => {
    const response = await fetch(resume)
    const result = await response.text()
    setCV(result)
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <OPeachHeader />

      <Grid
        templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        gap={10}
        bg="gray.100"
        h="full"
        px={[4, 4, 12, 48]}
      >
        <GridItem w="100%">
          <Step1
            selectedRadio={selectedRadio}
            onSelectRadio={setSelectedRadio}
            onEnterResume={setResume}
          ></Step1>
          <Step2
            setAboutJob={setAboutJob}
            setAboutCompany={setAboutCompany}
          ></Step2>
        </GridItem>
        <GridItem w="100%">
          <Box py="8" h="100%">
            <HStack justifyContent="space-between">
              <Heading size="md" my="6">
                Cover Letter
              </Heading>
              <Button
                variant="solid"
                bg="green.400"
                color="white"
                onClick={onGenerate}
              >
                <CheckIcon mr="2" />
                Generate
              </Button>
            </HStack>

            <Textarea bg="white" h="100%" maxH="500px" defaultValue={cv} />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage

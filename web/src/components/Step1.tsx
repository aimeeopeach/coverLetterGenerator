import { LinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Radio,
  Text,
  RadioGroup,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
} from '@chakra-ui/react'

import LinkedInButton from './LinkedInButton'

type propType = {
  selectedRadio: string
  onSelectRadio: React.Dispatch<React.SetStateAction<string>>
  onEnterResume: React.Dispatch<React.SetStateAction<string>>
}

const Step1 = (props: propType) => {
  return (
    <Box pt="8">
      <Heading size="md" my="6">
        Step 1: Enter Resume
      </Heading>

      <Tabs variant="unstyled">
        <RadioGroup
          onChange={props.onSelectRadio}
          defaultValue={props.selectedRadio}
          p="4"
          border="2px"
          borderRadius="md"
          borderColor="gray.300"
        >
          <TabList gap={2}>
            <Radio value="url">
              <Tab as="b">LinkedIn URL</Tab>
            </Radio>
            <Radio value="file">
              <Tab as="b">Upload File</Tab>
            </Radio>
            <Radio value="text">
              <Tab as="b">Text</Tab>
            </Radio>
          </TabList>
        </RadioGroup>
        <TabPanels>
          <TabPanel px="0">
            <Text mb={2}>Login to your Linkedin*</Text>
            <LinkedInButton />
          </TabPanel>
          <TabPanel px="0">
            <Text mb={2}>Upload your resume*</Text>
            <label
              htmlFor="upload_file"
              style={{
                border: '1px solid gray',
                padding: '4px 0 4px 12px',
                display: 'flex',
                borderRadius: '6px',
                backgroundColor: 'white',
                color: 'gray',
                cursor: 'pointer',
                alignItems: 'baseline',
              }}
            >
              <LinkIcon mr="2" />
              Click here to select a file
            </label>
            <Input
              id="upload_file"
              bg="white"
              type="file"
              opacity={0}
              zIndex={-1}
              position="absolute"
            />
            <Text size="xs" mt="1" color="gray.600">
              Support file type: .pdf .doc .docx .txt
            </Text>
          </TabPanel>
          <TabPanel px="0">
            <Text mb={2}>Your resume*</Text>
            <Textarea
              bg="white"
              h="300"
              placeholder="Enter your resume here..."
            ></Textarea>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Step1

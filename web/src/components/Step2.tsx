import { Box, Heading, Text, Textarea } from '@chakra-ui/react'

type propType = {
  setAboutJob: React.Dispatch<React.SetStateAction<string>>
  setAboutCompany: React.Dispatch<React.SetStateAction<string>>
}

const Step2 = (props: propType) => {
  return (
    <Box>
      <Heading size="md" mt="10">
        Step 2: Enter Job Post
      </Heading>
      <Text size="sm" mt="4" mb="2">
        About the job*
      </Text>
      <Textarea
        placeholder="Enter job responsiblities and job qualifications..."
        bg="white"
        h="150px"
        onChange={(e) => {
          props.setAboutJob(e.currentTarget.value)
        }}
      />
      <Text size="sm" mt="4" mb="2">
        About the company*
      </Text>
      <Textarea
        placeholder="Enter company description"
        bg="white"
        h="150px"
        onChange={(e) => {
          props.setAboutCompany(e.currentTarget.value)
        }}
      />
    </Box>
  )
}

export default Step2

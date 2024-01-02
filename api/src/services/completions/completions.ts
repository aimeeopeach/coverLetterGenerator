import { chatCompletion } from 'src/lib/openai'

export const completion = ({ input }) => {
  return chatCompletion(input)
}

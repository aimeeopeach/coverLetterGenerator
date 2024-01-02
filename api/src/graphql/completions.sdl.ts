export const schema = gql`
  type CompletionChunk {
    id: String!
    choices: [Choice]!
  }

  type Choice {
    delta: Delta
  }

  type Delta {
    content: String
    role: String
  }

  input CreateCompletionInput {
    resume: String!
    aboutJob: String
    aboutCompany: String
  }

  type Query {
    completion(input: CreateCompletionInput!): [CompletionChunk]! @skipAuth
  }
`

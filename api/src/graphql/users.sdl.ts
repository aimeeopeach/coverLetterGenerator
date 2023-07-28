export const schema = gql`
  type User {
    id: Int!
    email: String!
    token: String!
    tokenExpired: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    token: String!
    tokenExpired: DateTime!
  }

  input UpdateUserInput {
    email: String
    token: String
    tokenExpired: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`

export const schema = gql`
  type User {
    id: Int!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @requireAuth
  }

  type Mutation {
    deleteUser(id: Int!): User! @requireAuth
  }
`

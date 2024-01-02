export const schema = gql`
  type AuthSuccess {
    token: String
  }

  type AuthError {
    message: String
  }

  union AuthChallengeResponse = AuthSuccess | AuthError

  type Query {
    authChallenge(code: String!): AuthChallengeResponse! @skipAuth
  }
`

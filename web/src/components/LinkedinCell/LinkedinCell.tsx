import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query authChallenge($code: String!) {
    authChallenge(code: $code) {
      ... on AuthSuccess {
        token
      }
      ... on AuthError {
        message
      }
    }
  }
  # query users {
  #   users {
  #     id
  #   }
  # }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {JSON.stringify(error)}</div>
)

export const Success = ({ token, message }: CellSuccessProps) => {
  return (
    <div>
      {JSON.stringify(token)}
      {JSON.stringify(message)}
    </div>
  )
}

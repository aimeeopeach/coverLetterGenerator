import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const METHODS = gql`
  mutation createCompletion($input: CreateCompletionInput!) {
    createCompletion(input: $input) {
      choices {
        delta {
          content
          role
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ createCompletion }: CellSuccessProps) => {
  return <div>{JSON.stringify(createCompletion)}</div>
}

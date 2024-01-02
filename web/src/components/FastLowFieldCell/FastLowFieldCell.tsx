import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query SlowAndFastFieldWithDefer() {
    ... on Query @defer {
      slowField
    }
    fastField
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ fastLowField }: CellSuccessProps) => {
  return <div>{JSON.stringify(fastLowField)}</div>
}

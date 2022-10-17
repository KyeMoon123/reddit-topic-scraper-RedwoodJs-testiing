import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import type {
  FindLeadsTableQuery,
  FindLeadsTableQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { LeadsTableBody } from './LeadsTableBody'

export const QUERY = gql`
  query FindLeadsTableQuery($topicId: Int!) {
    recommended: recommendedOnTopic(id: $topicId) {
      recommended {
        channel_name
        id
        reddit_id
        score
        self_text
        title
        date_created
        url
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLeadsTableQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recommended,
}: CellSuccessProps<FindLeadsTableQuery, FindLeadsTableQueryVariables>) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className="bg-slate-100">
              <TableCell />
              <TableCell>Title</TableCell>
              <TableCell align="left">Source</TableCell>
              <TableCell align="left">Posted at</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <LeadsTableBody recommended={recommended} />
        </Table>
      </TableContainer>
    </div>
  )
}

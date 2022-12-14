import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// @ts-ignore
import type {FindLeadsTableQuery, FindLeadsTableQueryVariables,} from 'types/graphql'

import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'

import {LeadsTableBody} from './LeadsTableBody'
import * as React from "react";

export const QUERY = gql`
  query FindLeadsTableQuery($topicId: Int!) {
    recommended: recommendedOnTopic(id: $topicId) {
      id
      recommended {
        title
        self_text
        url
        channel_name
      }
      date_recommended
      score
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div>
      <h2>If you have just created this topic, xx is still searching for your leads, try refreshing the
        page.</h2>
      <button className="btn btn-primary flex justify-center py-2" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  )
}

export const Failure = ({error}: CellFailureProps<FindLeadsTableQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({recommended}: CellSuccessProps<FindLeadsTableQuery, FindLeadsTableQueryVariables>) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className="bg-slate-100">
              <TableCell/>
              <TableCell>Title</TableCell>
              <TableCell align="left">Source</TableCell>
              <TableCell align="left">Posted at</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <LeadsTableBody recommended={recommended}/>
        </Table>
      </TableContainer>
    </div>
  )
}

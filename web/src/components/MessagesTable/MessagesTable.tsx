import * as React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { RecommendedTable } from './MessagesTableRow'

const MessagesTable = ({ recommended }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className="bg-slate-100">
              <TableCell />
              <TableCell>Title</TableCell>
              <TableCell align="right">Source</TableCell>
              <TableCell align="right">Posted at</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <RecommendedTable recommended={recommended} />
        </Table>
      </TableContainer>
    </div>
  )
}

export default MessagesTable

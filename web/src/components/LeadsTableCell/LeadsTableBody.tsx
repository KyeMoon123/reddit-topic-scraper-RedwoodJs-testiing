import * as React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'

export function createData(
  title: string,
  source: string,
  date_created: string,
  self_text: string,
  url: string
) {
  return {
    title,
    source,
    date_created,
    self_text,
    url,
  }
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <h2> {row.title}</h2>
        </TableCell>
        <TableCell align="left">
          <h2> r/{row.source}</h2>
        </TableCell>
        <TableCell align="left">{row.date_created}</TableCell>
        <TableCell align="right">
          <div className="flex justify-center space-x-5">
            <a href={row.url} target="_blank" rel="noreferrer">
              <button className=" btn btn-primary btn-sm rounded-md">Visit</button>
            </a>
            <button className="btn btn-outline btn-sm btn-accent btn-square">
             X
            </button>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            <div className="py-12">
              <div className="card card-side  bg-base-100 shadow-xl">
                <div className="card-body ">
                  <h3 className="py-2 text-lg font-semibold">Content:</h3>
                  <p className="px-12 py-2 text-lg font-medium">
                    {row.self_text}
                  </p>
                </div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
export const LeadsTableBody = ({ recommended }) => {
  console.log(recommended)
  const rows = recommended.map((msg) => {
    return createData(
      msg.recommended.title,
      msg.recommended.channel_name,
      dayjs(msg.recommended.date_created).format('DD/MM/YYYY'),
      msg.recommended.self_text,
      msg.recommended.url
    )
  })
  return (
    <TableBody>
      {rows.map((row) => (
        <Row key={row.name} row={row} />
      ))}
    </TableBody>
  )
}

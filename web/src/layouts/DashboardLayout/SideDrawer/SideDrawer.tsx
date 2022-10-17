import * as React from 'react'

import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NewTopicDialogCell from 'web/src/components/NewTopicDialogCell/NewTopicDialogCell.tsx'
import TopicListCell from 'web/src/components/TopicListCell/TopicListCell.tsx'

import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes, Route } from '@redwoodjs/router'

const drawerWidth = 300

const SideDrawer = () => {
  const { userMetadata } = useAuth()
  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center"></div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideDrawer

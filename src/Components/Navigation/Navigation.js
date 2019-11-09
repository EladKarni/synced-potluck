import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import StorageIcon from '@material-ui/icons/Storage'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import './Navigation.css'

const Navigation = () => {
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      className="bottom-navigation"
      showLabels>
      <BottomNavigationAction component={Link} to="/invitations" label="Invitations" icon={<MailOutlineIcon />} />
      <BottomNavigationAction component={Link} to="/" label="Events" icon={<StorageIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  )
}

export default Navigation


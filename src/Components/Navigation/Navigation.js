import React from 'react'
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
      <BottomNavigationAction label="Invites" icon={<MailOutlineIcon />} />
      <BottomNavigationAction label="Events" icon={<StorageIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  )
}

export default Navigation


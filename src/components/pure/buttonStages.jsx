import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'
import React from 'react'

export default function ButtonStage({ onChange, value }) {
  return (
    <Paper elevation={3}>
      <BottomNavigation
        sx={{ justifyContent: 'flex-start' }}
        showLabels
        value={value}
        onChange={onChange}
      >
        <BottomNavigationAction label='Recents' icon={<RestoreIcon color='primary' />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon color='error' />} />
        <BottomNavigationAction label='Archive' icon={<ArchiveIcon color='success' />} />
      </BottomNavigation>
    </Paper>
  )
}

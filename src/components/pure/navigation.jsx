import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='tools-navigation-panel'>
      <h2>Navigate to:</h2>
      <Link to='/'>
        <Button variant='contained' color='warning'>
          Home
        </Button>
      </Link>
      <Link to='/start'>
        <Button variant='contained' color='warning'>
          Tools
        </Button>
      </Link>
    </div>
  )
}

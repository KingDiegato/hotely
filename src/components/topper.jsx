import React from 'react'
import { Link } from 'react-router-dom'
import { H, O, Te, E, L, Y } from './letters/letters'

export default function Topper() {
  return (
    <aside>
      <Link to='/'>
        <H /> <O /> <Te /> <E /> <L /> <Y />
      </Link>
    </aside>
  )
}

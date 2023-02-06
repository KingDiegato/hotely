import React from 'react'
import {
  blossomHotel,
  niceViews,
  hotelSofia,
  comfortSuite,
  smartHotel
} from '../assets/assets'

import '../styles/header.css'

const Header = () => {
  return (
    <section className='hd-imgs'>
      <img src={blossomHotel} />
      <img src={niceViews} />
      <img src={hotelSofia} />
      <img src={comfortSuite} />
      <img src={smartHotel} />
    </section>
  )
}

export default Header

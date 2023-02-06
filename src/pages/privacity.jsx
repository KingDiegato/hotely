import React from 'react'
import Footer from '../components/footer'
import Topper from '../components/topper'

import '../styles/infoPages.css'

export default function Privacity() {
  const topperPosition = {
    position: 'absolute',
    top: '1rem',
    left: '5rem'
  }
  return (
    <>
      <section style={topperPosition}>
        <Topper />
      </section>
      <h2>Privacity</h2>
      <Footer />
    </>
  )
}

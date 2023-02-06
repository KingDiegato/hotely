import React from 'react'
import { Countries } from '../assets/svg'
import Footer from '../components/footer'
import Header from '../components/header'
import Topper from '../components/topper'

import '../styles/infoPages.css'

export default function About() {
  const topperPosition = {
    position: 'absolute',
    top: '1rem',
    left: '5rem'
  }
  return (
    <>
      <Header />
      <section style={topperPosition}>
        <Topper />
      </section>
      <section className='info-container'>
        <h2 className='info-title'>About Us</h2>

        <div className='info-container-paragraph'>
          <h4>
            You can find us <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>here</a>
          </h4>
        </div>
        <Countries />
      </section>
      <Footer />
    </>
  )
}

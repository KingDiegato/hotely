import React from 'react'
import Topper from '../components/topper'

export default function About() {
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
      <h2>About</h2>
    </>
  )
}

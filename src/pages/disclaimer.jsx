import React from 'react'
import { Countries } from '../assets/svg'
import Footer from '../components/footer'
import Header from '../components/header'
import Topper from '../components/topper'

import '../styles/infoPages.css'

export default function Disclaimer() {
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
        <h2 className='info-title'>Disclaimer</h2>

        <div className='info-container-paragraph'>
          <h4>
            All about this website were build for the midudev-cohere-2023 hackathon, this software powered by Co:Here is totally free and never will be used for comercial end.
          </h4>
          <h4>
            For more information please check the website of <a href='https://cohere.ai' target='_blank' rel='noreferrer'>cohere.ai</a> and for more info about the hackathon made by Midudev check <a href='https://github.com/midudev/midu-cohere-hackathon' target='_blank' rel='noreferrer'>Cohere Hackathon Repository</a>
          </h4>
          <h4>Any feedback you want to send to us, please refer to this <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>Link</a></h4>
        </div>
        <Countries />
      </section>
      <Footer />
    </>
  )
}

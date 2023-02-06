import React from 'react'
import { Countries } from '../assets/svg'
import Footer from '../components/footer'
import Header from '../components/header'
import { B, H } from '../components/letters/letters'
import ToolCard from '../components/pure/toolCard'
import Topper from '../components/topper'

import '../styles/toolIndex.css'

const Start = () => {
  const letterH = H()
  console.log(letterH.props)
  return (
    <>
      <Header />
      <div className='tool-topper-container'>
        <Topper />
      </div>
      <h3 className='tool-slogan-box'>HOTELY © Offers Tools for Get a precise Review about the Hotel you Dream and help in the budget</h3>
      <div className='tool-cards-container-main'>
        <h2>Useful Tools:</h2>
        <section className='tool-cards-container-section'>
          <article>
            <ToolCard link='/ranking' btnLabel='Top 5 Hotels' toolParagraph='Get a rank o the top 5 hotels with ai and get the best choice for a confortable experience, make your trip unforgetable'>
              <H />otel Ranking
            </ToolCard>
          </article>
          <article>
            <ToolCard link='/budget' btnLabel='Hotel with Budget' toolParagraph='Keep your trip within your budget and worry only about enjoying the trip of your dreams'>
              <H />ealthy <B />udget
            </ToolCard>
          </article>
        </section>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
        <Countries />
      </div>
      <div style={{ maxWidth: '100vw' }}>
        <Footer />
      </div>
    </>
  )
}

export default Start

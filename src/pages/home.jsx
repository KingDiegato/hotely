import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Countries, FiveStars, Globe } from '../assets/svg'
import HotelSample from '../components/hotelSample'
import MediaCard from '../components/pure/mediaCard'
import Footer from '../components/footer'
import Topper from '../components/topper'
import '../styles/home.css'

import { hotelSofia, blossomHotel, viennaHotel } from '../assets/assets'

const Home = () => {
  return (
    <>
      <main className='container'>
        <section className='topper'>
          <Topper />
        </section>
        <article className='presentation-container'>
          <h3>Now you can get an hotel review with ai</h3>
          <h1>Get your hotel Review</h1>
          <FiveStars />
        </article>
        <div className='globe-container'>
          <Globe />
          <div style={{ marginLeft: '1rem', maxWidth: '50ch' }}>
            <h3>Discover your Dream Trip</h3>
            <p>Now you can have the definitive review of your destination with artificial intelligence at any time and in any place with Hotely</p>
          </div>
          <div className='started'>
            <Link to='/start'>
              <Button variant='contained' color='warning'>
                Getting Started
              </Button>
            </Link>
          </div>
        </div>
        <section className='hotel-sample'>
          <HotelSample />
        </section>
        <article className='media-card-article'>
          <MediaCard src={hotelSofia} name='Hotel Sofia'>
            The modern, air-conditioned rooms at the Hotel Sofia have flat-screen satellite TV and a safe. The private bathroom comes with a hairdryer and amenities.
          </MediaCard>
          <MediaCard src={blossomHotel} name='Blossom Hotel'>
            This 4-star hotel offers a bar and a shared lounge. The accommodations features a 24-hour front desk, room service, and currency exchange for guests.
          </MediaCard>
          <MediaCard src={viennaHotel} name='Hotel Am konzerthaus'>
            It offers free WiFi access, a 24-hour front desk, and luggage storage. Here you can find numerous recreational opportunities like walking, jogging or having a picnic.
          </MediaCard>
        </article>
      </main>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
        <Countries />
      </div>
      <Footer />
    </>
  )
}

export default Home

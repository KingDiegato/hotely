import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Countries } from '../../assets/svg'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { H } from '../../components/letters/letters'
import CountrySelect from '../../components/pure/countrySelector'
import Navigation from '../../components/pure/navigation'
import ReceiverInput from '../../components/pure/receiverInput'
import TendenciesCard from '../../components/tendenciesCard'
import { hotelReview } from '../../services/hotelsReview'

import '../../styles/starting.css'

const RankHotel = () => {
  const [loadRev, setLoadRev] = useState(false)
  const rankCityRef = useRef()
  const rankCountryRef = useRef()
  let prom = null
  const handleReview = async () => {
    setLoadRev(true)
    const text = rankCityRef.current.children[1].children[0].value
    const country = rankCountryRef.current.children[1].children[0].value
    prom = hotelReview(text, country)
    const value = await prom

    document.getElementById('receptor').value = value
    prom = null
    setLoadRev(false)
  }
  return (
    <>
      <Header />
      <Navigation />
      <article className='res-container-main'>
        <section className='res-container-logic'>
          <section className='rev-form'>
            <div className='rev-text-container'>
              <h2> <H />otel Ranking</h2>
              <p> Receive a Tierlist of 5 Hotels in the choosen Region</p>
            </div>
            <form className='form-control'>
              <CountrySelect CountryRef={rankCountryRef} id='country-budget' />
              <TextField ref={rankCityRef} fullWidth id='field' helperText='This field is Optional but its will throw more specific results' label='Insert a City' variant='outlined' type='text' />
            </form>
            <div className='submit'>
              <LoadingButton loading={loadRev} onClick={handleReview} variant='contained'>
                <span> Tier The hotels! </span>
              </LoadingButton>
            </div>
            <div className='submit'>
              <ReceiverInput id='receptor' />
            </div>
          </section>
        </section>
        <aside className='prev-results-aside-tenden'>
          <TendenciesCard />
        </aside>
        <br />
      </article>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
        <Countries />
      </div>
      <div style={{ maxWidth: '100vw' }}>
        <Footer />
      </div>
    </>
  )
}

export default RankHotel

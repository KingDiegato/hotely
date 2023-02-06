import React, { useState, useRef } from 'react'
import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'

// Components
import Header from '../../components/header'
import { B, H } from '../../components/letters/letters'
import CountrySelect from '../../components/pure/countrySelector'
import NumericInput from '../../components/pure/numericInput'
import ReceiverInput from '../../components/pure/receiverInput'
import ToppingCard from '../../components/toppingCard'
import { hotelBudget } from '../../services/hotelBudget'
import Footer from '../../components/footer'
import Navigation from '../../components/pure/navigation'

// Styles
import '../../styles/starting.css'

// Assets
import { Countries } from '../../assets/svg'

export default function BudgetHotel() {
  const [loadBtn, setLoadBtn] = useState(false)

  /* useRefs() */
  const budgetRef = useRef()
  const budCityRef = useRef()
  const budCountryRef = useRef()

  let prom = null
  const handleBudget = async () => {
    setLoadBtn(true)
    const text = budgetRef.current.children[1].children[0].value
    const country = budCountryRef.current.children[1].children[0].value
    const budget = budgetRef.current.children[1].children[0].value
    prom = hotelBudget(country, text, budget)
    const value = await prom

    document.getElementById('budget-receptor').value = value
    prom = null
    setLoadBtn(false)
  }
  return (
    <>
      <Header />
      <Navigation />
      <article className='res-container-main'>
        <section className='res-container-logic'>
          <section className='rev-form'>
            <div className='rev-text-container'>
              <h2>  <H />ealthy <B />udget</h2>
              <p> Receive a Tierlist of 5 Hotels in the choosen Region</p>
            </div>
            <form className='form-control'>
              <CountrySelect CountryRef={budCountryRef} id='country-budget' />
              <TextField ref={budCityRef} id='budget-field' helperText='This field is Optional but its will throw more specific results' label='Insert a City' variant='outlined' type='text' />
              <NumericInput reference={budgetRef} id='max-budget' fullWidth />
            </form>
            <div className='submit'>
              <LoadingButton loading={loadBtn} onClick={handleBudget} variant='contained'>
                <span> Save My Budget! </span>
              </LoadingButton>
            </div>
            <div className='submit'>
              <ReceiverInput id='budget-receptor' />
            </div>
          </section>
        </section>
        <aside className='prev-results-aside-top'>
          <ToppingCard />
        </aside>
        <br />
      </article>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
        <Countries />
      </div>
      <Footer />
    </>
  )
}

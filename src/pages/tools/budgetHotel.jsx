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
  const [cityError, setCityError] = useState(null)
  const [controlError, setControlError] = useState(null)

  /* useRefs() */
  const budgetRef = useRef()
  const budCityRef = useRef()
  const budCountryRef = useRef()
  const budReceptor = useRef()

  let prom = null
  const handleBudget = async () => {
    const text = budCityRef.current.children[1].children[0].value
    const budCountry = budCountryRef.current.children[1].children[0].value
    const budget = budgetRef.current.children[1].children[0].value

    console.log(budCityRef.current.children[1].style)
    try {
      setControlError(null)
      if (text.length === 0) {
        setCityError(true)
        const errorColor = budCityRef.current.children[1].style.borderColor = 'red'
        console.log(errorColor)
        return errorColor
      }
      setLoadBtn(true)
      prom = hotelBudget(budCountry, text, budget)
      const value = await prom
      budReceptor.current.value = value
      prom = null
    } catch (e) {
      setControlError(e.message)
      console.error(controlError)
    } finally {
      setLoadBtn(false)
    }
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
              <p> Get the best hotel in base of your max Budget </p>
            </div>
            <form className='formula'>
              <div className='form-control'>
                <CountrySelect CountryRef={budCountryRef} id='country-budget' />
                <TextField ref={budCityRef} id='budget-field' helperText={cityError ? 'This field is required' : ''} label='Barcelona, Paris, Otawa...' variant='outlined' type='text' />
                <NumericInput reference={budgetRef} id='max-budget' fullWidth />
              </div>
              <div className='submit'>
                <LoadingButton loading={loadBtn} onClick={handleBudget} variant='contained'>
                  <span> Save My Budget! </span>
                </LoadingButton>
              </div>
            </form>
            <div className='submit'>
              <ReceiverInput refer={budReceptor} id='budget-receptor' />
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

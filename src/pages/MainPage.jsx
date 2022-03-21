import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks'
import { CurrencyItem, ErrorMessage, Loader } from '../components'
import { errorMessages, APP_URL } from '../const'

const MainPage = () => {
  const [todayCurrencies, setTodayCurrencies] = useState({})
  const [fetchTodayCurrencies, loading, error] = useFetch(async () => {
    const resp = await fetch(APP_URL.TODAY_CURRENCIES)
    const fetchingCurrencies = await resp.json()
    setTodayCurrencies(fetchingCurrencies)
  })

  useEffect(() => {
    fetchTodayCurrencies()
  }, [])

  return (
    <>
      <main className='container'>
        <h1 className='title'>Список валют</h1>

        {
          loading ? <Loader /> :
            !loading && error ? <ErrorMessage text={errorMessages.LOAD_CURRENCIES} /> : (
              <section>
                <ul className='currencies-list'>
                  {
                    todayCurrencies?.Valute && Object.keys(todayCurrencies.Valute).map(codeCurrency => {
                      const currency = todayCurrencies.Valute[codeCurrency]
                      return (
                        <li
                          key={currency.ID}
                          className='currencies-list__item'
                        >
                          <CurrencyItem currency={currency} />
                        </li>
                      )
                    })
                  }
                </ul>
              </section>
            )
        }
      </main>
    </>
  )
}

export default MainPage

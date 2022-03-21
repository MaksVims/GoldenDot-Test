import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CurrencyHistoryItem, ErrorMessage, Loader } from '../components'
import { useFetch } from '../hooks'
import { getCurrencyHistoryLastTenDay } from '../helper'
import { errorMessages, APP_URL } from '../const'

const CurrencyPage = () => {
  const { currencyCode } = useParams()
  const navigator = useNavigate()
  const [currencyHistory, setCurrencyHistory] = useState({})

  const [currencyLastTenDay, loading, error] = useFetch(useCallback(async () => {
    const fetchingArchiveCurrency = []
    let prevURL = null
    let i = 1

    while (i <= 10) {
      const resp = await fetch(prevURL ? prevURL : APP_URL.TODAY_CURRENCIES)
      const result = await resp.json()
      fetchingArchiveCurrency.push({ date: result.Date, currencies: result.Valute })
      prevURL = result.PreviousURL
      i += 1
    }

    setCurrencyHistory(getCurrencyHistoryLastTenDay(currencyCode, fetchingArchiveCurrency))
  }, [currencyCode]))

  useEffect(() => {
    currencyLastTenDay()
  }, [])

  const goHome = useCallback(() => navigator('/'), [navigator])

  return (
    <>
      <main className='container currencyPage__container'>
        <h1 className='title'>Данные о валюте</h1>

        {
          loading ? <Loader /> :
            !loading && error ? <ErrorMessage text={errorMessages.LOAD_HISTORY_CURRENCY} /> : (
              <section className="currency-history">
                <h2 className="currency-history__title">
                  Последние 10 записей о валюте:<br /> {currencyHistory.name}
                </h2>
                <ul className="currency-history__list">
                  {
                    currencyHistory?.history?.map(currency => (
                      <li
                        className="currency-history__item"
                        key={currency.date}
                      >
                        <CurrencyHistoryItem currency={currency} />
                      </li>
                    ))
                  }
                </ul>
              </section>
            )
        }
      </main>

      <button
        className="btn-back"
        onClick={goHome}
      >
        Назад
      </button>
    </>
  )
}

export default CurrencyPage
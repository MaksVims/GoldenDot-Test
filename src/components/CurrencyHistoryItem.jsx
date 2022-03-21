import React from 'react'
import { formatCurrency, formatDate } from '../helper'
import PropTypes from 'prop-types'

const CurrencyHistoryItem = ({ currency }) => {
  return (
    <article className="currency currency-history__item">
      <span>{formatDate(currency.date)}</span>
      <span>{formatCurrency(currency.value / currency.nominal)}</span>
    </article>
  )
}

CurrencyHistoryItem.propTypes = {
  currency: PropTypes.shape({
    date: PropTypes.string,
    value: PropTypes.number,
    nominal: PropTypes.number
  })
}

export default CurrencyHistoryItem
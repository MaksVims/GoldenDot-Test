import React, { useCallback, useRef, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { formatCurrency, getDifPercent } from '../helper'
import { useHover } from '../hooks'
import { Link } from 'react-router-dom'
import Tooltip from './Tooltip'
import PropTypes from 'prop-types'

const CurrencyItem = ({ currency }) => {
  const [coordMouse, setCoordMouse] = useState({ x: 0 })
  const currencyRef = useRef()
  const isHover = useHover(currencyRef.current)

  const handleMouseOver = useCallback((e) => setCoordMouse({ x: e.clientX }), [])
  const difIcon = currency.Value < currency.Previous ? <AiFillCaretDown size={15} /> : <AiFillCaretUp size={15} />

  return (
    <Link to={`currency/${currency.CharCode}`}>
      <article
        ref={currencyRef}
        className='currency'
        onMouseEnter={handleMouseOver}
      >
        <span className='currency__code'>
          {currency.CharCode}
        </span>
        <span className='currency__value'>
          {formatCurrency(currency.Value / currency.Nominal)}
        </span>
        <span className='currency__dif'>
          {getDifPercent(currency.Value, currency.Previous) + '%'}
        </span>
        <span className='currency__icon'>
          {difIcon}
        </span>
        <Tooltip
          value={currency.Name}
          isHover={isHover}
          coord={coordMouse}
          target={currencyRef.current}
        />
      </article>
    </Link>
  )
}

CurrencyItem.propTypes = {
  currency: PropTypes.shape({
    Value: PropTypes.number,
    Previous: PropTypes.number,
    Nominal: PropTypes.number,
    CharCode: PropTypes.string
  })
}

export default CurrencyItem
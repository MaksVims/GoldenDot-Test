import React, { useRef } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'

const Tooltip = ({ isHover, value, coord, target }) => {
  const classes = cl({
    'tooltip': true,
    'tooltip-visible': isHover
  })
  const tooltipRef = useRef()

  if (isHover && tooltipRef.current && target) {
    const tooltipTargetRect = target.getBoundingClientRect()
    tooltipRef.current.style.left = coord.x - (tooltipRef.current.clientWidth / 2) - tooltipTargetRect.left + 'px'
    tooltipRef.current.style.top = tooltipTargetRect.height + 'px'
  }

  return (
    <div ref={tooltipRef} className={classes}>
      <p>{value}</p>
    </div>
  )
}

Tooltip.propTypes = {
  isHover: PropTypes.bool,
  value: PropTypes.string,
  coord: PropTypes.shape({
    x: PropTypes.number
  }),
  target: PropTypes.instanceOf(Element)
}

export default Tooltip
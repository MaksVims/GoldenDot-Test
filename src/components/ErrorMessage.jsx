import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ text }) => (
  <div className='error'>
    <h3 className='error-text'>
      {text}
    </h3>
  </div>
)

ErrorMessage.propTypes = {
  text: PropTypes.string
}

export default ErrorMessage
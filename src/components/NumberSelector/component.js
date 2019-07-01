import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

const NumberSelector = ({handleClickNumber, hidden, label, max, number}) => {
  const classNumberSelector = cx('NumberSelector', {
    'NumberSelector--hidden': hidden
  })

  return (
    <div className={classNumberSelector}>
      <h3 className="NumberSelector-Title">{label}</h3>
      <ul className="NumberSelector-List">
        {Array.from({length: max}).map((_, index) => {
          const classItem = cx('NumberSelector-Item', {
            'NumberSelector-Item--selected': number === index
          })
          return (
            <li
              className={classItem}
              key={index}
              onClick={handleClickNumber(index)}
            >
              {index + 1}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

NumberSelector.propTypes = {
  handleClickNumber: PropTypes.func,
  hidden: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.number,
  number: PropTypes.number
}
export default NumberSelector

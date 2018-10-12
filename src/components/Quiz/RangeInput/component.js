import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

const RangeInput = ({label, hint, onChange, value}) => (
  <div className="RangeInput">
    <TextField
      hintText={hint}
      floatingLabelText={label}
      onChange={onChange}
      value={value}
      type="number"
    />
  </div>
)
RangeInput.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number
}

export default RangeInput

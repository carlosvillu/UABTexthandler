import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

import styleMUI from './style.js'

const RangeInput = ({label, hint, onChange, value, style = {}}) => (
  <div className="RangeInput" style={style}>
    <TextField
      floatingLabelStyle={styleMUI.floatingLabelStyle}
      floatingLabelText={label}
      hintText={hint}
      onChange={onChange}
      style={styleMUI.TextField}
      type="number"
      value={value}
    />
  </div>
)
RangeInput.propTypes = {
  hint: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default RangeInput

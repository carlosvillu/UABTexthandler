import React from 'react'
import PropTypes from 'prop-types'

import {
  RadioButton,
  RadioButtonGroup as RadioButtonGroupMUI
} from 'material-ui/RadioButton'

import style from './style'

const RadioButtonGroup = ({label, name, onChange, i18n}) => (
  <div className="RadioButtonGroup">
    <h3 className="RadioButtonGroup-title">{label}</h3>
    <RadioButtonGroupMUI
      name={name}
      onChange={onChange}
      className="RadioButtonGroup-container"
    >
      <RadioButton
        style={style.RadioButton}
        value={RadioButtonGroup.YES}
        label={i18n.t('RADIOBUTTONGROUP_RADIO_YES')}
      />
      <RadioButton
        style={style.RadioButton}
        value={RadioButtonGroup.NO}
        label={i18n.t('RADIOBUTTONGROUP_RADIO_NO')}
      />
    </RadioButtonGroupMUI>
  </div>
)
RadioButtonGroup.YES = 'YES'
RadioButtonGroup.NO = 'NO'
RadioButtonGroup.propTypes = {
  i18n: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default RadioButtonGroup

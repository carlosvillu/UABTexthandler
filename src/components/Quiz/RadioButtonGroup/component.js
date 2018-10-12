import React from 'react'
import PropTypes from 'prop-types'

import {
  RadioButton,
  RadioButtonGroup as RadioButtonGroupMUI
} from 'material-ui/RadioButton'

const RadioButtonGroup = ({label, name, onChange, i18n}) => (
  <div className="RadioButtonGroup">
    <span>{label}</span>
    <RadioButtonGroupMUI name={name} onChange={onChange}>
      <RadioButton
        value={RadioButtonGroup.YES}
        label={i18n.t('RADIOBUTTONGROUP_RADIO_YES')}
      />
      <RadioButton
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

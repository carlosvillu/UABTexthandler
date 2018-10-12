import React from 'react'
import PropTypes from 'prop-types'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Reason extends React.PureComponent {
  static YES = 'YES'
  static NO = 'NO'

  static propTypes = {
    handleChangeSelect: PropTypes.func,
    handleChangeSwitch: PropTypes.func,
    handleClickFlatButton: PropTypes.func,
    i18n: PropTypes.object,
    reason: PropTypes.object,
    title: PropTypes.string
  }
  render() {
    const {
      handleChangeSelect,
      handleChangeSwitch,
      handleClickFlatButton,
      i18n,
      reason,
      title
    } = this.props
    return (
      <div className="Reason">
        <h2 className="Reason-title">{title}</h2>
        <div className="Reason-row">
          <div className="Reason-cell">
            <RadioButtonGroup
              defaultSelected="not_light"
              name="shipSpeed"
              onChange={handleChangeSwitch}
            >
              <RadioButton
                value={Reason.YES}
                label={i18n.t('REASON_RADIO_YES')}
              />
              <RadioButton
                value={Reason.NO}
                label={i18n.t('REASON_RADIO_NO')}
              />
            </RadioButtonGroup>
          </div>
          <div className="Reason-cell">
            {reason.types.map((type, index) => (
              <SelectField
                key={index} // I know it!
                floatingLabelText={i18n.t('REASON_SELECT_LABEL')}
                onChange={handleChangeSelect(index)}
                disabled={
                  !reason.justification || reason.justification === Reason.NO
                }
                value={reason.types[index]}
              >
                <MenuItem value={null} primaryText="" />
                <MenuItem
                  value="example"
                  primaryText={i18n.t('REASON_EXAMPLE')}
                />
                <MenuItem
                  value="experts"
                  primaryText={i18n.t('REASON_EXPERTS')}
                />
                <MenuItem
                  value="evidences"
                  primaryText={i18n.t('REASON_EVIDENCES')}
                />
                <MenuItem
                  value="others"
                  primaryText={i18n.t('REASON_OTHERS')}
                />
              </SelectField>
            ))}
            <span className="Reason-button" onClick={handleClickFlatButton}>
              {i18n.t('REASON_ADD_TYPE')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Reason

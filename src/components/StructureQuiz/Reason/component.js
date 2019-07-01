import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import style from './style'

class Reason extends React.Component {
  static YES = 'YES'
  static NO = 'NO'

  static propTypes = {
    handleChangeSelect: PropTypes.func,
    handleChangeSwitch: PropTypes.func,
    handleClickFlatButton: PropTypes.func,
    i18n: PropTypes.object,
    isLast: PropTypes.bool,
    reason: PropTypes.object,
    title: PropTypes.string
  }

  render() {
    const {
      handleChangeSelect,
      handleChangeSwitch,
      handleClickFlatButton,
      i18n,
      isLast,
      reason,
      title
    } = this.props

    const reasonClassName = cx('Reason', {'is-last': isLast})

    return (
      <div className={reasonClassName}>
        <h3 className="Reason-title">{title}</h3>
        <div className="Reason-row">
          <div className="Reason-radiobuttons">
            <RadioButtonGroup
              className="Reason-radiobuttons-group"
              defaultSelected="not_light"
              name="shipSpeed"
              onChange={handleChangeSwitch}
            >
              <RadioButton
                style={style.RadioButton}
                value={Reason.YES}
                label={i18n.t('REASON_RADIO_YES')}
              />
              <RadioButton
                style={style.RadioButton}
                value={Reason.NO}
                label={i18n.t('REASON_RADIO_NO')}
              />
            </RadioButtonGroup>
          </div>
          <div className="Reason-selects">
            {reason.types.map((type, index) => (
              <SelectField
                style={style.SelectField}
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
            <a className="Reason-button" onClick={handleClickFlatButton}>
              {i18n.t('REASON_ADD_TYPE')}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Reason

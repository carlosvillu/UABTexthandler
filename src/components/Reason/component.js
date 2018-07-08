import React from 'react'
import PropTypes from 'prop-types'

import Toggle from 'material-ui/Toggle'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Reason extends React.PureComponent {
  static propTypes = {
    handleChangeSelect: PropTypes.func,
    handleChangeToggle: PropTypes.func,
    i18n: PropTypes.object,
    reason: PropTypes.object,
    title: PropTypes.string
  }
  render() {
    const {
      handleChangeSelect,
      handleChangeToggle,
      i18n,
      reason,
      title
    } = this.props
    return (
      <div className="Reason">
        <h2 className="Reason-title">{title}</h2>
        <div className="Reason-row">
          <div className="Reason-cell">
            <Toggle
              label={i18n.t('REASON_TOGGLE_LABEL')}
              onToggle={handleChangeToggle}
            />
          </div>
          <div className="Reason-cell">
            <SelectField
              floatingLabelText={i18n.t('REASON_SELECT_LABEL')}
              onChange={handleChangeSelect}
              value={reason.type}
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
              <MenuItem value="others" primaryText={i18n.t('REASON_OTHERS')} />
            </SelectField>
          </div>
        </div>
      </div>
    )
  }
}

export default Reason

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import CircularProgress from 'material-ui/CircularProgress'

const SelectorDashboard = ({
  stateShowSpinner,
  handleChangeSelect,
  handleClickRaisedButton,
  selector,
  domain,
  i18n
}) => {
  const {QUALITY, STRUCTURE} = domain.get('config').get('TYPE_EVALUATIONS')
  const {OPINION, NARRATIVE} = domain.get('config').get('GENRE')
  const {PRE, POST, MANT, SEG1, SEG2} = domain.get('config').get('TIME')

  const spinnerClass = cx('SelectorDashboard-spinner', {
    'is-hidden': !stateShowSpinner
  })

  return (
    <div className="SelectorDashboard">
      <div className={spinnerClass}>
        <CircularProgress size={80} thickness={5} />
      </div>
      <div className="SelectorDashboard-selects">
        <SelectField
          floatingLabelText={i18n.t('SELECTOR_DASHBOARD_TYPE')}
          onChange={handleChangeSelect('type')}
          value={selector.type}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem
            value={QUALITY}
            primaryText={i18n.t('SELECTOR_DASHBOARD_QUALITY')}
          />
          <MenuItem
            value={STRUCTURE}
            primaryText={i18n.t('SELECTOR_DASHBOARD_STRUCTURE')}
          />
        </SelectField>

        <SelectField
          floatingLabelText={i18n.t('SELECTOR_DASHBOARD_GENRE')}
          onChange={handleChangeSelect('genre')}
          value={selector.genre}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem
            value={OPINION}
            primaryText={i18n.t('SELECTOR_DASHBOARD_OPINION')}
          />
          <MenuItem
            value={NARRATIVE}
            primaryText={i18n.t('SELECTOR_DASHBOARD_NARRATIVE')}
          />
        </SelectField>

        <SelectField
          floatingLabelText={i18n.t('SELECTOR_DASHBOARD_TIME')}
          onChange={handleChangeSelect('time')}
          value={selector.time}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem
            value={PRE}
            primaryText={i18n.t('SELECTOR_DASHBOARD_TIME_PRE')}
          />
          <MenuItem
            value={POST}
            primaryText={i18n.t('SELECTOR_DASHBOARD_TIME_POST')}
          />
          <MenuItem
            value={MANT}
            primaryText={i18n.t('SELECTOR_DASHBOARD_TIME_MANT')}
          />
          <MenuItem
            value={SEG1}
            primaryText={i18n.t('SELECTOR_DASHBOARD_TIME_SEG1')}
          />
          <MenuItem
            value={SEG2}
            primaryText={i18n.t('SELECTOR_DASHBOARD_TIME_SEG2')}
          />
        </SelectField>

        <SelectField
          floatingLabelText={i18n.t('SELECTOR_DASHBOARD_ORDER')}
          onChange={handleChangeSelect('order')}
          value={selector.order}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem
            value={0}
            primaryText={i18n.t('SELECTOR_DASHBOARD_ORDER_FIRST')}
          />
          <MenuItem
            value={1}
            primaryText={i18n.t('SELECTOR_DASHBOARD_ORDER_SECOND')}
          />
          <MenuItem
            value={2}
            primaryText={i18n.t('SELECTOR_DASHBOARD_ORDER_THIRD')}
          />
          <MenuItem
            value={3}
            primaryText={i18n.t('SELECTOR_DASHBOARD_ORDER_FOURTH')}
          />
        </SelectField>
      </div>
      <div className="SelectorDashboard-actions">
        <RaisedButton
          disabled={false}
          label={i18n.t('SELECTOR_DASHBOARD_GENERATE')}
          primary
          onClick={handleClickRaisedButton}
        />
      </div>
    </div>
  )
}

SelectorDashboard.propTypes = {
  stateShowSpinner: PropTypes.bool,
  handleChangeSelect: PropTypes.func,
  handleClickRaisedButton: PropTypes.func,
  i18n: PropTypes.shape({t: PropTypes.func}),
  domain: PropTypes.shape({get: PropTypes.func}),
  selector: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    time: PropTypes.string,
    order: PropTypes.number
  })
}
export default SelectorDashboard

import React from 'react'
import AdminDashboard from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

import {UI} from '../../state'
import {Subscribe} from 'unstated'
import withState from 'recompose/withState'

export default compose(
  withState('stateCSV', 'setStateCSV', []),
  withState('statefilters', 'setStateFilters', {}),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(props => (
  <Subscribe to={[UI]}>{ui => <AdminDashboard {...props} ui={ui} />}</Subscribe>
))

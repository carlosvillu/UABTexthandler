import React from 'react'
import PrivilegedUserMenu from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

import {UI} from '../../state'
import {Subscribe} from 'unstated'

export default compose(
  withState('stateIsPrivileged', 'setStateIsPrivileged', false),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(props => (
  <Subscribe to={[UI]}>
    {ui => <PrivilegedUserMenu {...props} ui={ui} />}
  </Subscribe>
))

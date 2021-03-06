import React from 'react'
import AdminEvaluations from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

import {UI} from '../../state'
import {Subscribe} from 'unstated'

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(props => (
  <Subscribe to={[UI]}>
    {ui => <AdminEvaluations {...props} ui={ui} />}
  </Subscribe>
))

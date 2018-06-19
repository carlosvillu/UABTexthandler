import PrivilegedUserMenu from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateIsPrivileged', 'setStateIsPrivileged', false),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(PrivilegedUserMenu)

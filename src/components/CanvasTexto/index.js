import CanvasTexto from './components'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'
import withState from 'recompose/withState'

export default compose(
  withState('stateCurrentUser', 'setStateCurrentUser', false),
  onlyUpdateForKeys(['student', 'stateCurrentUser']),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(CanvasTexto)

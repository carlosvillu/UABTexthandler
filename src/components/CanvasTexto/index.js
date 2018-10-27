import CanvasTexto from './components'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'

export default compose(
  onlyUpdateForKeys(['student']),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(CanvasTexto)

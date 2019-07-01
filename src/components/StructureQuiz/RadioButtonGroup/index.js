import RadioButtonGroup from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'
// import withReducer from 'recompose/withReducer'
// import withHandlers from 'recompose/withHandlers'

export default compose(
  onlyUpdateForKeys(['label', 'name']),
  getContext({i18n: PropTypes.object})
)(RadioButtonGroup)

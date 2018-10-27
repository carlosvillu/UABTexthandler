import TableTexts from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'

export default compose(
  withState('stateTexts', 'setStateTexts', []),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(TableTexts)

import TableTexts from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(TableTexts)

import Quiz from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

export default compose(getContext({i18n: PropTypes.object}))(Quiz)

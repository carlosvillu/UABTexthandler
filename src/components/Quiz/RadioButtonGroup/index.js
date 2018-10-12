import RadioButtonGroup from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
// import withReducer from 'recompose/withReducer'
// import withHandlers from 'recompose/withHandlers'

export default compose(getContext({i18n: PropTypes.object}))(RadioButtonGroup)

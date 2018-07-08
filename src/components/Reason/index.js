import Reason from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withReducer(
    'reason',
    'dispatch',
    (state, action) => ({...state, [action.field]: action.value}),
    ({justification, type}) => ({justification, type})
  ),
  withHandlers({
    handleChangeToggle: props => (evt, value) => {
      props.dispatch({field: 'justification', value}, props.onChange)
    },
    handleChangeSelect: props => (evt, index, value) => {
      props.dispatch({field: 'type', value}, props.onChange)
    }
  })
)(Reason)

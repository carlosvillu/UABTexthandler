import Reason from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'

export default compose(
  onlyUpdateForKeys(['justification', 'types']),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withReducer(
    'reason',
    'dispatch',
    (state, action) => {
      let nextState
      if (action.field === 'types') {
        nextState = {
          ...state,
          types: [
            ...state.types.slice(0, action.index),
            action.value,
            ...state.types.slice(action.index + 1)
          ]
        }
      }

      if (action.field === 'justification') {
        nextState = {...state, justification: action.value}
      }

      if (
        state &&
        state.justification === Reason.YES &&
        action.type === 'add-type'
      ) {
        nextState = {...state, types: [...state.types, null]}
      }

      if (nextState && nextState.justification === Reason.NO) {
        return {...nextState, types: [null]}
      }

      return nextState || state
    },
    ({justification, types}) => ({justification, types})
  ),
  withHandlers({
    handleChangeSwitch: props => (evt, value) => {
      props.dispatch({field: 'justification', value}, props.onChange)
    },
    handleChangeSelect: props => indexSelect => (evt, indexOption, value) => {
      props.dispatch(
        {field: 'types', value, index: indexSelect},
        props.onChange
      )
    },
    handleClickFlatButton: props => evt => {
      props.dispatch({type: 'add-type'}, props.onChange)
    }
  })
)(Reason)

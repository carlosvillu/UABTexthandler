import Quiz from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withReducer(
    'evaluation',
    'dispatch',
    (state, action) => {
      if (
        action.type === 'add_reason' &&
        state.reasons.length < Quiz.MAX_REASONS
      ) {
        return {
          ...state,
          reasons: [...state.reasons, {justification: false, type: null}]
        }
      }

      if (action.type === 'reason') {
        return {
          ...state,
          reasons: [
            ...state.reasons.slice(0, action.index),
            {...action.value},
            ...state.reasons.slice(action.index + 1)
          ]
        }
      }

      return {...state, [action.field]: action.value}
    },
    {
      introduction: false,
      opinion: false,
      reasons: [
        {justification: false, type: null},
        {justification: false, type: null},
        {justification: false, type: null}
      ],
      extensive: false,
      synthetic: false,
      otherOpinion: false,
      opinionConector: false,
      reasonConectors: 0,
      reasonExplication: 0,
      conclusion: false,
      otherConectors: 0,
      quality: 1
    }
  ),
  withHandlers({
    handleChangeToggle: props => name => (evt, value) => {
      props.dispatch({type: 'toggle', field: name, value}, props.onChange)
    },
    handleChangeSlider: props => name => (evt, value) => {
      props.dispatch({type: 'slider', field: name, value}, props.onChange)
    },
    handleChangeReason: props => index => value => {
      props.dispatch({type: 'reason', index, value}, props.onChange)
    },
    handleClickFlatButton: props => () => {
      props.dispatch({type: 'add_reason'}, props.onChange)
    }
  })
)(Quiz)

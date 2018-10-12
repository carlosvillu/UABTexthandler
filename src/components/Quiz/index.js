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
      introduction: null,
      opinion: null,
      reasons: [
        {justification: null, type: null},
        {justification: null, type: null},
        {justification: null, type: null}
      ],
      extensive: null,
      synthetic: null,
      otherOpinion: null,
      opinionConector: null,
      reasonConectors: 0,
      reasonExplication: 0,
      conclusion: null,
      otherConectors: 0,
      freeText: ''
    }
  ),
  withHandlers({
    handleChangeSwitch: props => name => (evt, value) => {
      props.dispatch({type: 'switch', field: name, value}, props.onChange)
    },
    handleChangeSlider: props => name => (evt, value) => {
      props.dispatch({type: 'slider', field: name, value}, props.onChange)
    },
    handleChangeReason: props => index => value => {
      props.dispatch({type: 'reason', index, value}, props.onChange)
    },
    handleClickFlatButton: props => () => {
      props.dispatch({type: 'add_reason'}, props.onChange)
    },
    handleChangeTextArea: props => (evt, value) => {
      props.dispatch(
        {type: 'free_text', field: 'freeText', value},
        props.onChange
      )
    }
  })
)(Quiz)

import QualityQuiz from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withReducer(
    'form',
    'dispatch',
    (state, action) => {
      switch (action.type) {
        case 'change-grade':
          return {
            ...state,
            grade: action.grade,
            quality: null
          }
        case 'change-quality':
          return {
            ...state,
            quality: action.quality
          }

        default:
          return state
      }
    },
    props => ({grade: props.grade, quality: null})
  ),
  withHandlers({
    handleChangeSelect: props => (evt, indexOption, value) => {
      props.dispatch({type: 'change-grade', grade: value}, state => {
        props.onChangeGrade(state.grade)
        props.onChangeQuality(state.quality)
      })
    },
    handleChangeQuality: props => quality => {
      props.dispatch({type: 'change-quality', quality}, state =>
        props.onChangeQuality(state.quality)
      )
    }
  })
)(QualityQuiz)

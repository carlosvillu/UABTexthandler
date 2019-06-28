import QualityQuiz from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'

export default compose(
  getContext({i18n: PropTypes.object}),
  withReducer(
    'quality',
    'dispatch',
    (state, action) => {
      switch (action.type) {
        case 'change-grade':
          return {
            ...state,
            grade: action.grade
          }

        default:
          return state
      }
    },
    props => ({grade: null})
  ),
  withHandlers({
    handleChangeSelect: props => (evt, indexOption, value) => {
      props.dispatch({type: 'change-grade', grade: value}, state =>
        props.onChangeGrade(state.grade)
      )
    }
  })
)(QualityQuiz)

import Home from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import {hot} from 'react-hot-loader'

export default compose(
  withState('stateTab', 'setStateTab', Home.QUESTIONS_TAB),
  withState('stateText', 'setStateText', {}),
  withState('stateEvaluation', 'setStateEvaluation'),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleChangeTab: props => tab => props.setStateTab(tab),
    handleInitQuiz: props => evaluation => props.setStateEvaluation(evaluation),
    handleChangeQuiz: props => evaluation =>
      props.setStateEvaluation(evaluation)
  }),
  hot(module)
)(Home)

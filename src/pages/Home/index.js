import Home from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import {hot} from 'react-hot-loader'

export default compose(
  withState('stateText', 'setStateText', {}),
  withState('stateEvaluation', 'setStateEvaluation'),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleInitQuiz: props => evaluation => props.setStateEvaluation(evaluation),
    handleChangeQuiz: props => evaluation => {
      console.log(evaluation)
      props.setStateEvaluation(evaluation)
    },
    handleClickFlatButton: props => evt => {
      props.router.push('/')
      window.scrollTo(0, 0)
    },
    handleClickRaisedButton: props => evt => {}
  }),
  hot(module)
)(Home)

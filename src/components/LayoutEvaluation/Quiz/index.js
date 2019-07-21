import Quiz from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateDisableButtons', 'setStateDisableButtons', false),
  getContext({i18n: PropTypes.object}),
  withHandlers({
    handleClickSkip: props => async evt => {
      props.setStateDisableButtons(true)
      await props.onClickSkip()
      props.setStateDisableButtons(false)
    },
    handleClickSave: props => async evt => {
      props.setStateDisableButtons(true)
      await props.onClickSave()
      props.setStateDisableButtons(false)
    }
  })
)(Quiz)

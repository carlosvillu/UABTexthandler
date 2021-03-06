import Structure from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateText', 'setStateText'),
  withState('stateNoMoreTexts', 'setStateNoMoreTexts', false),
  withState('stateEvaluation', 'setStateEvaluation'),
  withState('stateErrors', 'setStateErrors'),
  withState('stateDisableButtons', 'setStateDisableButtons', false),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleInitQuiz: props => evaluation => props.setStateEvaluation(evaluation),
    handleChangeQuiz: props => evaluation => {
      console.log(evaluation) // eslint-disable-line
      props.setStateEvaluation(evaluation)
    },
    handleClickFlatButton: props => async evt => {
      try {
        props.setStateDisableButtons(true)
        await props.domain
          .get('skip_evaluations_use_case')
          .execute({text: props.stateText, type: 'structure'})
      } catch (err) {
        window.alert(props.i18n('STRUCTURE_ERROR_SKIP_TEXT_MSG'))
      }
      props.setStateDisableButtons(false)
      props.router.push({
        pathname: '/structure'
      })
      window.scrollTo(0, 0)
    },
    handleClickRaisedButton: props => async evt => {
      const {domain, stateText, stateEvaluation, i18n} = props
      try {
        props.setStateDisableButtons(true)
        const user = await domain.get('current_users_use_case').execute()
        await domain
          .get('save_structure_evaluation_texts_use_case')
          .execute({user, evaluation: stateEvaluation, text: stateText})
        props.setStateDisableButtons(false)
        props.router.push('/structure')
        window.scrollTo(0, 0)
      } catch (err) {
        window.alert(
          `${i18n.t('HOME_ALERT_ERROR_TITLE')}\n\n${err.errors().join(', ')}`
        )
        props.setStateDisableButtons(false)
      }
    }
  })
)(Structure)

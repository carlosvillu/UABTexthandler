import Quality from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateText', 'setStateText'),
  withState('stateNoMoreTexts', 'setStateNoMoreTexts', false),
  withState('stateQuality', 'setStateQuality'),
  withState(
    'stateGrade',
    'setStateGrade',
    props => (props.location.state ? props.location.state.grade : null)
  ),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleClickSkipButton: props => async evt => {
      try {
        await props.domain
          .get('skip_evaluations_use_case')
          .execute({text: props.stateText, type: 'quality'})
      } catch (err) {
        window.alert(props.i18n('QUALITY_ERROR_SKIP_TEXT_MSG'))
      }
      props.router.push({
        pathname: '/quality',
        state: {grade: props.stateGrade}
      })
      window.scrollTo(0, 0)
    },
    handleClickSaveButton: props => async evt => {
      try {
        const user = await props.domain.get('current_users_use_case').execute()
        await props.domain
          .get('save_quality_evaluation_texts_use_case')
          .execute({text: props.stateText, quality: props.stateQuality, user})
        props.router.push({
          pathname: '/quality',
          state: {grade: props.stateGrade}
        })
        window.scrollTo(0, 0)
      } catch (e) {
        window.alert(props.i18n.t('QUALITY_ERROR_MSG'))
      }
    },
    handleChangeQuality: props => quality => {
      props.setStateQuality(quality)
    }
  })
)(Quality)

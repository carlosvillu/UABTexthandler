import Quality from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateText', 'setStateText'),
  withState('stateQuality', 'setStateQuality'),
  withState(
    'stateGrade',
    'setStateGrade',
    props => (props.location.state ? props.location.state.grade : null)
  ),
  getContext({domain: PropTypes.object}),
  withHandlers({
    handleClickSkipButton: props => evt => {
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
        window.alert('Qualiy not valid')
      }
    },
    handleChangeQuality: props => quality => {
      props.setStateQuality(quality)
    }
  })
)(Quality)

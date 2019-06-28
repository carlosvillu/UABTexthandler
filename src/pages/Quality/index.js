import Quality from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateText', 'setStateText'),
  withState('stateGrade', 'setStateGrade'),
  getContext({domain: PropTypes.object}),
  withHandlers({
    handleClickSkipButton: props => evt => {
      props.router.push('/quality')
      window.scrollTo(0, 0)
    },
    handleClickSaveButton: props => evt => {
      props.router.push('/quality')
      window.scrollTo(0, 0)
    },
    handleChangeQuality: props => quality => {
      console.log(`Next Quality: ${quality}`) // eslint-disable-line
    }
  })
)(Quality)

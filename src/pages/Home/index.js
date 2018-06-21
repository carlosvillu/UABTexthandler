import Home from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('stateTab', 'setStateTab', Home.TEXT_TAB),
  withState('stateText', 'setStateText'),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleChangeTab: props => tab => props.setStateTab(tab)
  })
)(Home)

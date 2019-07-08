import TableSkipEvaluations from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withState from 'recompose/withState'

export default compose(
  withState('stateSkips', 'setStateSkips', []),
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(TableSkipEvaluations)

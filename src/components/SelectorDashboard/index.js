import SelectorDashboard from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

export default compose(
  getContext({i18n: PropTypes.object, domain: PropTypes.object}),
  withState('stateShowSpinner', 'setStateShowSpinner', false),
  withReducer(
    'selector',
    'dispatch',
    (state, action) => {
      const {type, field, value} = action
      if (type === 'UPDATE') {
        return {...state, [field]: value}
      }
      return state
    },
    {
      type: null,
      genre: null,
      time: null,
      order: null
    }
  ),
  withHandlers({
    handleChangeSelect: props => field => async (evt, index, value) => {
      props.dispatch({type: 'UPDATE', field, value})
    },
    handleClickRaisedButton: props => async () => {
      props.setStateShowSpinner(true)
      // const filters = {type: 'quality', genre: 'OP', time: 'PRE', order: 0} || props.selector // eslint-disable-line
      const filters = props.selector // eslint-disable-line
      const csvJSON = await props.domain
        .get('get_csv_stats_filtered_evaluations_use_case')
        .execute({filters})
      props.onChangeCSV({csv: csvJSON, filters})
      props.setStateShowSpinner(false)
    }
  })
)(SelectorDashboard)

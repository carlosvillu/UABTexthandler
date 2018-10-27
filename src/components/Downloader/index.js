import Downloader from './component'
import PropTypes from 'prop-types'

import {fromEvaluationsToCSV} from './lib'
import saveFile from '../../lib/saveFile'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateEvaluations', 'setStateEvaluations', []),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleClickFlatButton: props => evt => {
      const csv = fromEvaluationsToCSV(props.stateEvaluations)
      saveFile(
        new window.Blob([csv], {type: 'text/csv;charset=utf-8'}),
        'evaluations.csv'
      )
    }
  })
)(Downloader)

import Downloader from './component'
import PropTypes from 'prop-types'

import {fromEvaluationsToCSV} from './lib'
import saveFile from '../../lib/saveFile'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateStructureEvaluations', 'setStateStructureEvaluations', []),
  withState('stateQualityEvaluations', 'setStateQualityEvaluations', []),
  withState(
    'stateTextsWhitoutQualityEvaluations',
    'setStateTextsWhioutQualityEvaluations',
    []
  ),
  withState('stateSkipsEvaluations', 'setStateSkipsEvaluations', []),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleClickFlatButton: props => evt => {
      if (props.stateStructureEvaluations.length !== 0) {
        const csvStructure = fromEvaluationsToCSV(
          props.stateStructureEvaluations
        )
        saveFile(
          new window.Blob([csvStructure], {type: 'text/csv;charset=utf-8'}),
          'evaluations_structure.csv'
        )
      }

      if (props.stateQualityEvaluations.length !== 0) {
        const csvQuality = fromEvaluationsToCSV(props.stateQualityEvaluations)
        saveFile(
          new window.Blob([csvQuality], {type: 'text/csv;charset=utf-8'}),
          'evaluations_quality.csv'
        )
      }

      if (props.stateTextsWhitoutQualityEvaluations.length !== 0) {
        const csvQuality = fromEvaluationsToCSV(
          props.stateTextsWhitoutQualityEvaluations
        )
        saveFile(
          new window.Blob([csvQuality], {type: 'text/csv;charset=utf-8'}),
          'texts_whitout_evaluations_quality.csv'
        )
      }

      if (props.stateSkipsEvaluations !== 0) {
        const csvSkips = fromEvaluationsToCSV(props.stateSkipsEvaluations)
        saveFile(
          new window.Blob([csvSkips], {type: 'text/csv;charset=utf-8'}),
          'evaluations_skips.csv'
        )
      }
    }
  })
)(Downloader)

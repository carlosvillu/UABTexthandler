import TableCSV from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

const SEPARATOR = ';'
export const fromEvaluationsToCSV = evaluations => {
  const HEADERS = Object.keys(evaluations[0]).join(SEPARATOR)
  return evaluations.reduce((acc, evaluation) => {
    const row = Object.keys(evaluation)
      .map(key => `"${evaluation[key] ?? ''}"`)
      .join(SEPARATOR)
    return `${acc}\n${row}`
  }, HEADERS)
}

export default compose(
  getContext({domain: PropTypes.object, i18n: PropTypes.object})
)(TableCSV)

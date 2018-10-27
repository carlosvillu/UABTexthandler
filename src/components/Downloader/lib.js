const SEPARATOR = ';'
export const fromEvaluationsToCSV = evaluations => {
  const HEADERS = Object.keys(evaluations[0]).join(SEPARATOR)
  return evaluations.reduce((acc, evaluation) => {
    const row = Object.keys(evaluation)
      .map(key => `"${evaluation[key]}"`)
      .join(SEPARATOR)
    return `${acc}\n${row}`
  }, HEADERS)
}

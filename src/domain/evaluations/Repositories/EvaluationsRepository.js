export default class EvaluationsRepository {
  allStructure() {
    throw Error('[EvaluationsRepository#allStructure] must be implemented')
  }

  allQuality() {
    throw Error('[EvaluationsRepository#allQuality] must be implemented')
  }

  allSkips() {
    throw Error('[EvaluationsRepository#allSkips] must be implemented')
  }

  skip() {
    throw Error('[EvaluationsRepository#skip] must be implemented')
  }

  without() {
    throw Error('[EvaluationsRepository#without] must be implemented')
  }
}

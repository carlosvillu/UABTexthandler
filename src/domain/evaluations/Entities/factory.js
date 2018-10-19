import EvaluationEntity from './EvaluationEntity'

export default class EvaluationsEntitiesFactory {
  static evaluationEntity = evaluation => new EvaluationEntity(evaluation)
}

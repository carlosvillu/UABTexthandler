import QualityEvaluationEntity from './QualityEvaluationEntity'
import StructureEvaluationEntity from './StructureEvaluationEntity'
import TextEntity from './TextEntity'

export default class EvaluationsEntitiesFactory {
  static qualityEvaluationEntity = evaluation =>
    new QualityEvaluationEntity(evaluation)

  static structureEvaluationEntity = evaluation =>
    new StructureEvaluationEntity(evaluation)

  static textEntity = text => new TextEntity(text)
}

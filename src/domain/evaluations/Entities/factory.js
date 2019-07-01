import QualityEvaluationEntity from './QualityEvaluationEntity'
import StructureEvaluationEntity from './StructureEvaluationEntity'

export default class EvaluationsEntitiesFactory {
  static qualityEvaluationEntity = evaluation =>
    new QualityEvaluationEntity(evaluation)

  static structureEvaluationEntity = evaluation =>
    new StructureEvaluationEntity(evaluation)
}

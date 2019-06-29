import StructureEvaluationEntity from './StructureEvaluationEntity'

export default class EvaluationsEntitiesFactory {
  static structureEvaluationEntity = evaluation =>
    new StructureEvaluationEntity(evaluation)
}

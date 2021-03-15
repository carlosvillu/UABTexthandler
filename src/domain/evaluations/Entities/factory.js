import StudentEntity from './StudentEntity'
import QualityEvaluationEntity from './QualityEvaluationEntity'
import SkipEvaluationEntity from './SkipEvaluationEntity'
import StructureEvaluationEntity from './StructureEvaluationEntity'
import TextEntity from './TextEntity'

export default class EvaluationsEntitiesFactory {
  static qualityEvaluationEntity = evaluation =>
    new QualityEvaluationEntity(evaluation)

  static skipEvaluationEntity = evaluation =>
    new SkipEvaluationEntity(evaluation)

  static structureEvaluationEntity = evaluation =>
    new StructureEvaluationEntity(evaluation)

  static textEntity = text => new TextEntity(text)

  static studentEntity = ({studentID}) => new StudentEntity({studentID})
}

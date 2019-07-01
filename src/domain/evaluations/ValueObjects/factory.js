import StructureStatsValueObject from './StructureStatsValueObject'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

export default class ValueObjectsEvaluationsFactory {
  static structureStatsValueObject = stats =>
    new StructureStatsValueObject(stats)

  static typeEvaluationValueObject = type => new TypeEvaluationValueObject(type)
}

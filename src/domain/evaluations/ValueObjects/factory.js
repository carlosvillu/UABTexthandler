import StructureStatsValueObject from './StructureStatsValueObject'

export default class ValueObjectsEvaluationsFactory {
  static structureStatsValueObject = stats =>
    new StructureStatsValueObject(stats)
}

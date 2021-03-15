import FilteredEvaluationsValueObject from './FilteredEvaluationsValueObject'
import FiltersValueObject from './FiltersValueObject'
import StructureStatsValueObject from './StructureStatsValueObject'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

export default class ValueObjectsEvaluationsFactory {
  static structureStatsValueObject = stats =>
    new StructureStatsValueObject(stats)

  static typeEvaluationValueObject = type => new TypeEvaluationValueObject(type)
  static filtersValueObject = filters => new FiltersValueObject(filters)

  static filteredEvaluationsValueObject = params =>
    new FilteredEvaluationsValueObject(params)
}

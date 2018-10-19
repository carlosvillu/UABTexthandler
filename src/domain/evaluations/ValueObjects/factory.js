import StatsValueObject from './StatsValueObject'

export default class ValueObjectsEvaluationsFactory {
  static statsValueObject = stats => new StatsValueObject(stats)
}

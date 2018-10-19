import StatsValueObjectsFactory from '../ValueObjects/factory'

import EvaluationEntityListToStatsValueObjectMapper from './EvaluationEntityListToStatsValueObjectMapper'

export default class EvaluationsMappersFactory {
  static evaluationEntityListToStatsValueObjectMapper = () =>
    new EvaluationEntityListToStatsValueObjectMapper({
      statsValueObjectFactory: StatsValueObjectsFactory.statsValueObject
    })
}

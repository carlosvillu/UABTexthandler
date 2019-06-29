import StatsValueObjectsFactory from '../ValueObjects/factory'

import StructureEvaluationEntityListToStatsValueObjectMapper from './StructureEvaluationEntityListToStatsValueObjectMapper'

export default class EvaluationsMappersFactory {
  static structureEvaluationEntityListToStatsValueObjectMapper = () =>
    new StructureEvaluationEntityListToStatsValueObjectMapper({
      statsValueObjectFactory: StatsValueObjectsFactory.statsValueObject
    })
}

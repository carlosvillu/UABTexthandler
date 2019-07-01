import StatsValueObjectsFactory from '../ValueObjects/factory'

import QualityEvaluationEntityListToStatsValueObjectMapper from './QualityEvaluationEntityListToStatsValueObjectMapper'
import StructureEvaluationEntityListToStatsValueObjectMapper from './StructureEvaluationEntityListToStatsValueObjectMapper'

export default class EvaluationsMappersFactory {
  static qualityEvaluationEntityListToStatsValueObjectMapper = () =>
    new QualityEvaluationEntityListToStatsValueObjectMapper()

  static structureEvaluationEntityListToStatsValueObjectMapper = () =>
    new StructureEvaluationEntityListToStatsValueObjectMapper({
      statsValueObjectFactory: StatsValueObjectsFactory.statsValueObject
    })
}

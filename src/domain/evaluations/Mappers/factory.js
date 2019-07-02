import StatsValueObjectsFactory from '../ValueObjects/factory'

import QualityEvaluationEntityListToStatsValueObjectMapper from './QualityEvaluationEntityListToStatsValueObjectMapper'
import SkipEvaluationEntityListToStatsValueObjectMapper from './SkipEvaluationEntityListToStatsValueObjectMapper'
import StructureEvaluationEntityListToStatsValueObjectMapper from './StructureEvaluationEntityListToStatsValueObjectMapper'

export default class EvaluationsMappersFactory {
  static qualityEvaluationEntityListToStatsValueObjectMapper = () =>
    new QualityEvaluationEntityListToStatsValueObjectMapper()

  static skipEvaluationEntityListToStatsValueObjectMapper = () =>
    new SkipEvaluationEntityListToStatsValueObjectMapper()

  static structureEvaluationEntityListToStatsValueObjectMapper = () =>
    new StructureEvaluationEntityListToStatsValueObjectMapper({
      statsValueObjectFactory: StatsValueObjectsFactory.statsValueObject
    })
}

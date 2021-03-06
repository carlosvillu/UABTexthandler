import EvaluationsValueObjectsFactory from '../ValueObjects/factory'
import EvaluationsMappersFactory from '../Mappers/factory'
import EvaluationsRepositoriesFactory from '../Repositories/factory'

import GetCSVStatsFilteredEvaluationsService from './GetCSVStatsFilteredEvaluationsService'
import GetStatsQualityEvaluationsService from './GetStatsQualityEvaluationsService'
import GetStatsSkippedEvaluationsService from './GetStatsSkippedEvaluationsService'
import GetStatsStructureEvaluationsService from './GetStatsStructureEvaluationsService'
import GetStatsTextsWithoutQualityEvaluationsService from './GetStatsTextsWithoutQualityEvaluationsService'
import SkipEvaluationsService from './SkipEvaluationsService'

export default class EvaluationsServicesFactory {
  static getCSVStatsFilteredEvaluationsService = ({config}) =>
    new GetCSVStatsFilteredEvaluationsService({
      filteredEvaluationsValueObjectFactory:
        EvaluationsValueObjectsFactory.filteredEvaluationsValueObject,
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static getStatsQualityEvaluationsService = ({config}) =>
    new GetStatsQualityEvaluationsService({
      mapper: EvaluationsMappersFactory.qualityEvaluationEntityListToStatsValueObjectMapper(),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static getStatsSkippedEvaluationsService = ({config}) =>
    new GetStatsSkippedEvaluationsService({
      mapper: EvaluationsMappersFactory.skipEvaluationEntityListToStatsValueObjectMapper(),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static getStatsStructureEvaluationsService = ({config}) =>
    new GetStatsStructureEvaluationsService({
      mapper: EvaluationsMappersFactory.structureEvaluationEntityListToStatsValueObjectMapper(),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static getStatsTextsWithoutQualityEvaluationsService = ({config}) =>
    new GetStatsTextsWithoutQualityEvaluationsService({
      mapper: EvaluationsMappersFactory.textsEntityListToStatsTextsWhitoutQualityEvaluation(),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static skipEvaluationsService = ({config}) =>
    new SkipEvaluationsService({
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })
}

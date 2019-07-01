import EvaluationsMappersFactory from '../Mappers/factory'
import EvaluationsRepositoriesFactory from '../Repositories/factory'

import GetStatsQualityEvaluationsService from './GetStatsQualityEvaluationsService'
import GetStatsStructureEvaluationsService from './GetStatsStructureEvaluationsService'

export default class EvaluationsServicesFactory {
  static getStatsQualityEvaluationsService = ({config}) =>
    new GetStatsQualityEvaluationsService({
      mapper: EvaluationsMappersFactory.qualityEvaluationEntityListToStatsValueObjectMapper(
        {config}
      ),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })

  static getStatsStructureEvaluationsService = ({config}) =>
    new GetStatsStructureEvaluationsService({
      mapper: EvaluationsMappersFactory.structureEvaluationEntityListToStatsValueObjectMapper(
        {config}
      ),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })
}

import EvaluationsMappersFactory from '../Mappers/factory'
import EvaluationsRepositoriesFactory from '../Repositories/factory'

import GetStatsEvaluationsService from './GetStatsEvaluationsService'

export default class EvaluationsServicesFactory {
  static getStatsEvaluationsService = ({config}) =>
    new GetStatsEvaluationsService({
      mapper: EvaluationsMappersFactory.evaluationEntityListToStatsValueObjectMapper(
        {config}
      ),
      repository: EvaluationsRepositoriesFactory.fireBaseEvaluationsRepository({
        config
      })
    })
}

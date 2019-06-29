import EvaluationsMappersFactory from '../Mappers/factory'
import EvaluationsRepositoriesFactory from '../Repositories/factory'

import GetStatsStructureEvaluationsService from './GetStatsStructureEvaluationsService'

export default class EvaluationsServicesFactory {
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

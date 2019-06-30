import EvaluationsServicesFactory from '../Services/factory'

import GetStatsQualityEvaluationsUseCase from './GetStatsQualityEvaluationsUseCase'
import GetStatsStructureEvaluationsUseCase from './GetStatsStructureEvaluationsUseCase'

export default class EvaluationsUseCasesFactory {
  static getStatsQualityEvaluationsUseCase = ({config}) =>
    new GetStatsQualityEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsQualityEvaluationsService({
        config
      })
    })

  static getStatsStructureEvaluationsUseCase = ({config}) =>
    new GetStatsStructureEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsStructureEvaluationsService({
        config
      })
    })
}

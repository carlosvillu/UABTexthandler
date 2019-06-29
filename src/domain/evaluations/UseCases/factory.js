import EvaluationsServicesFactory from '../Services/factory'

import GetStatsStructureEvaluationsUseCase from './GetStatsStructureEvaluationsUseCase'

export default class EvaluationsUseCasesFactory {
  static getStatsStructureEvaluationsUseCase = ({config}) =>
    new GetStatsStructureEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsStructureEvaluationsService({
        config
      })
    })
}

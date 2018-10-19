import EvaluationsServicesFactory from '../Services/factory'

import GetStatsEvaluationsUseCase from './GetStatsEvaluationsUseCase'

export default class EvaluationsUseCasesFactory {
  static getStatsEvaluationsUseCase = ({config}) =>
    new GetStatsEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsEvaluationsService({config})
    })
}

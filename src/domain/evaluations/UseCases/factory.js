import ValueObjectsEvaluationsFactory from '../ValueObjects/factory'
import EvaluationsEntitiesFactory from '../Entities/factory'
import EvaluationsServicesFactory from '../Services/factory'

import GetStatsQualityEvaluationsUseCase from './GetStatsQualityEvaluationsUseCase'
import GetStatsStructureEvaluationsUseCase from './GetStatsStructureEvaluationsUseCase'
import SkipEvaluationsUseCase from './SkipEvaluationsUseCase'

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

  static skipEvaluationsUseCase = ({config}) =>
    new SkipEvaluationsUseCase({
      typeEvaluationValueObjectFactory:
        ValueObjectsEvaluationsFactory.typeEvaluationValueObject,
      textEntityFactory: EvaluationsEntitiesFactory.textEntity,
      service: EvaluationsServicesFactory.skipEvaluationsService({
        config
      })
    })
}

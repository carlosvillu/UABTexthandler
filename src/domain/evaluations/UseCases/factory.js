import ValueObjectsEvaluationsFactory from '../ValueObjects/factory'
import EvaluationsEntitiesFactory from '../Entities/factory'
import EvaluationsServicesFactory from '../Services/factory'

import GetStatsQualityEvaluationsUseCase from './GetStatsQualityEvaluationsUseCase'
import GetStatsSkippedEvaluationsUseCase from './GetStatsSkippedEvaluationsUseCase'
import GetStatsStructureEvaluationsUseCase from './GetStatsStructureEvaluationsUseCase'
import GetStatsTextsWithoutQualityEvaluationsUseCase from './GetStatsTextsWithoutQualityEvaluationsUseCase'
import SkipEvaluationsUseCase from './SkipEvaluationsUseCase'
import GetCSVStatsFilteredEvaluationsUseCase from './GetCSVStatsFilteredEvaluationsUseCase'

export default class EvaluationsUseCasesFactory {
  static getCSVStatsFilteredEvaluationsUseCase = ({config}) =>
    new GetCSVStatsFilteredEvaluationsUseCase({
      filtersValueObjectFactory:
        ValueObjectsEvaluationsFactory.filtersValueObject,
      service: EvaluationsServicesFactory.getCSVStatsFilteredEvaluationsService(
        {
          config
        }
      )
    })

  static getStatsQualityEvaluationsUseCase = ({config}) =>
    new GetStatsQualityEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsQualityEvaluationsService({
        config
      })
    })

  static getStatsSkippedEvaluationsUseCase = ({config}) =>
    new GetStatsSkippedEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsSkippedEvaluationsService({
        config
      })
    })

  static getStatsStructureEvaluationsUseCase = ({config}) =>
    new GetStatsStructureEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsStructureEvaluationsService({
        config
      })
    })

  static getStatsTextsWithoutQualityEvaluationsUseCase = ({config}) =>
    new GetStatsTextsWithoutQualityEvaluationsUseCase({
      service: EvaluationsServicesFactory.getStatsTextsWithoutQualityEvaluationsService(
        {config}
      )
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

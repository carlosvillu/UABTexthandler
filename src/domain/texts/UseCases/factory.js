import UsersEntitiesFactory from '../../users/Entities/factory'
import TextsServicesFactory from '../Services/factory'

import GetAllTextsUseCase from './GetAllTextsUseCase'
import GetNextEvaluationTextsUseCase from './GetNextEvaluationTextsUseCase'
import NormalizeTextsUseCase from './NormalizeTextsUseCase'
import UploadTextsUseCase from './UploadTextsUseCase'

export default class TextsUseCasesFactory {
  static getAllTextsUseCase = ({config}) =>
    new GetAllTextsUseCase({
      service: TextsServicesFactory.getAllTextsService({config})
    })

  static getNextEvaluationTextsUseCase = ({config}) =>
    new GetNextEvaluationTextsUseCase({
      service: TextsServicesFactory.getNextEvaluationTextsService({config}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static normalizeTextsUseCase = ({config}) =>
    new NormalizeTextsUseCase({
      service: TextsServicesFactory.normalizeTextsService({config})
    })

  static uploadTextsUseCase = ({config}) =>
    new UploadTextsUseCase({
      service: TextsServicesFactory.uploadTextsService({config})
    })
}

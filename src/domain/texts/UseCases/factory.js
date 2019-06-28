import UsersEntitiesFactory from '../../users/Entities/factory'

import TextsEntitiesFactory from '../Entities/factory'
import TextsRequestsFactory from '../Requests/factory'
import TextsServicesFactory from '../Services/factory'
import TextsValueObjectsFactory from '../ValueObjects/factory'

import GetAllTextsUseCase from './GetAllTextsUseCase'
import GetNextEvaluationTextsUseCase from './GetNextEvaluationTextsUseCase'
import NormalizeTextsUseCase from './NormalizeTextsUseCase'
import SaveStructureEvaluationTextsUseCase from './SaveStructureEvaluationTextsUseCase'
import UploadTextsUseCase from './UploadTextsUseCase'

export default class TextsUseCasesFactory {
  static getAllTextsUseCase = ({config}) =>
    new GetAllTextsUseCase({
      service: TextsServicesFactory.getAllTextsService({config})
    })

  static getNextEvaluationTextsUseCase = ({config}) =>
    new GetNextEvaluationTextsUseCase({
      levelValueObjectFactory: TextsValueObjectsFactory.levelValueObject,
      service: TextsServicesFactory.getNextEvaluationTextsService({config}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static normalizeTextsUseCase = ({config}) =>
    new NormalizeTextsUseCase({
      service: TextsServicesFactory.normalizeTextsService({config})
    })

  static saveStructureEvaluationTextsUseCase = ({config}) =>
    new SaveStructureEvaluationTextsUseCase({
      requestFactory: TextsRequestsFactory.evaluationTextsRequest,
      userEntityFactory: UsersEntitiesFactory.userEntity,
      textEntityFactory: TextsEntitiesFactory.textEntity,
      service: TextsServicesFactory.saveStructureEvaluationTextsService({
        config
      })
    })

  static uploadTextsUseCase = ({config}) =>
    new UploadTextsUseCase({
      service: TextsServicesFactory.uploadTextsService({config})
    })
}

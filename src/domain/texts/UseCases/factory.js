import UsersEntitiesFactory from '../../users/Entities/factory'

import TextsEntitiesFactory from '../Entities/factory'
import TextsRequestsFactory from '../Requests/factory'
import TextsServicesFactory from '../Services/factory'
import TextsValueObjectsFactory from '../ValueObjects/factory'

import GetAllTextsUseCase from './GetAllTextsUseCase'
import GetNextEvaluationTextsUseCase from './GetNextEvaluationTextsUseCase'
import NormalizeTextsUseCase from './NormalizeTextsUseCase'
import SaveQualityEvaluationTextsUseCase from './SaveQualityEvaluationTextsUseCase'
import SaveStructureEvaluationTextsUseCase from './SaveStructureEvaluationTextsUseCase'
import UploadPromptTextsUseCase from './UploadPromptTextsUseCase'
import UploadStudentTextsUseCase from './UploadStudentTextsUseCase'
import UploadTextsUseCase from './UploadTextsUseCase'

export default class TextsUseCasesFactory {
  static getAllTextsUseCase = ({config}) =>
    new GetAllTextsUseCase({
      service: TextsServicesFactory.getAllTextsService({config})
    })

  static getNextEvaluationTextsUseCase = ({config}) =>
    new GetNextEvaluationTextsUseCase({
      typeEvaluationValueObjectFactory:
        TextsValueObjectsFactory.typeEvaluationValueObject,
      levelValueObjectFactory: TextsValueObjectsFactory.levelValueObject,
      genreValueObjectFactory: TextsValueObjectsFactory.genreValueObject,
      service: TextsServicesFactory.getNextEvaluationTextsService({config}),
      userEntityFactory: UsersEntitiesFactory.userEntity
    })

  static normalizeTextsUseCase = ({config}) =>
    new NormalizeTextsUseCase({
      service: TextsServicesFactory.normalizeTextsService({config})
    })

  static saveQualityEvaluationTextsUseCase = ({config}) =>
    new SaveQualityEvaluationTextsUseCase({
      qualityValueObjectFactory: TextsValueObjectsFactory.qualityValueObject,
      userEntityFactory: UsersEntitiesFactory.userEntity,
      textEntityFactory: TextsEntitiesFactory.textEntity,
      service: TextsServicesFactory.saveQualityEvaluationTextsService({
        config
      })
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

  static uploadPromptTextsUseCase = ({config}) =>
    new UploadPromptTextsUseCase({
      service: TextsServicesFactory.uploadPromptTextsService({config}),
      textEntityFactory: TextsEntitiesFactory.textEntity
    })

  static uploadStudentTextsUseCase = ({config}) =>
    new UploadStudentTextsUseCase({
      service: TextsServicesFactory.uploadStudentTextsService({config}),
      studentEntityFactory: TextsEntitiesFactory.studentEntity
    })

  static uploadTextsUseCase = ({config}) =>
    new UploadTextsUseCase({
      service: TextsServicesFactory.uploadTextsService({config})
    })
}

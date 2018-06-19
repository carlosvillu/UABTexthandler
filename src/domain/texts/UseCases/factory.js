import TextsServicesFactory from '../Services/factory'

import GetAllTextsUseCase from './GetAllTextsUseCase'
import UploadTextsUseCase from './UploadTextsUseCase'

export default class TextsUseCasesFactory {
  static getAllTextsUseCase = ({config}) =>
    new GetAllTextsUseCase({
      service: TextsServicesFactory.getAllTextsService({config})
    })

  static uploadTextsUseCase = ({config}) =>
    new UploadTextsUseCase({
      service: TextsServicesFactory.uploadTextsService({config})
    })
}

import TextsRepositoriesFactory from '../Repositories/factory'
import TextsMappersFactory from '../Mappers/factory'

import GetAllTextsService from './GetAllTextsService'
import GetNextEvaluationTextsService from './GetNextEvaluationTextsService'
import NormalizeTextsService from './NormalizeTextsService'
import SaveEvaluationTextsService from './SaveEvaluationTextsService'
import UploadTextsService from './UploadTextsService'

export default class TextsServicesFactory {
  static getAllTextsService = ({config}) =>
    new GetAllTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static getNextEvaluationTextsService = ({config}) =>
    new GetNextEvaluationTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static normalizeTextsService = ({config}) =>
    new NormalizeTextsService({
      mapper: TextsMappersFactory.planTextToPlainTextNormalizedMapper({config})
    })

  static saveEvaluationTextsService = ({config}) =>
    new SaveEvaluationTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static uploadTextsService = ({config}) =>
    new UploadTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config}),
      mapper: TextsMappersFactory.jsonTextToTextEntityTextsMapper({config})
    })
}

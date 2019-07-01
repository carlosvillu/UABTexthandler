import TextsRepositoriesFactory from '../Repositories/factory'
import TextsMappersFactory from '../Mappers/factory'

import GetAllTextsService from './GetAllTextsService'
import GetNextEvaluationTextsService from './GetNextEvaluationTextsService'
import NormalizeTextsService from './NormalizeTextsService'
import SaveQualityEvaluationTextsService from './SaveQualityEvaluationTextsService'
import SaveStructureEvaluationTextsService from './SaveStructureEvaluationTextsService'
import UploadTextsService from './UploadTextsService'
import UploadPromptTextsService from './UploadPromptTextsService'

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

  static saveQualityEvaluationTextsService = ({config}) =>
    new SaveQualityEvaluationTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static saveStructureEvaluationTextsService = ({config}) =>
    new SaveStructureEvaluationTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static uploadPromptTextsService = ({config}) =>
    new UploadPromptTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config})
    })

  static uploadTextsService = ({config}) =>
    new UploadTextsService({
      repository: TextsRepositoriesFactory.fireBaseTextsRepository({config}),
      mapper: TextsMappersFactory.jsonTextToTextEntityTextsMapper({config})
    })
}

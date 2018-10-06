import TextEntitiesFactory from '../Entities/factory'

import JSONTextToTextEntityTextsMapper from './JSONTextToTextEntityTextsMapper'
import PlanTextToPlainTextNormalizedMapper from './PlanTextToPlainTextNormalizedMapper'

export default class TextsMappersFactory {
  static jsonTextToTextEntityTextsMapper = ({config}) =>
    new JSONTextToTextEntityTextsMapper({
      textEntityFactory: TextEntitiesFactory.textEntity,
      normalizeMapper: TextsMappersFactory.planTextToPlainTextNormalizedMapper({
        config
      })
    })

  static planTextToPlainTextNormalizedMapper = ({config}) =>
    new PlanTextToPlainTextNormalizedMapper({
      config
    })
}

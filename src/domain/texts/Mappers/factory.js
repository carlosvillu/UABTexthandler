import TextEntitiesFactory from '../Entities/factory'

import JSONTextToTextEntityTextsMapper from './JSONTextToTextEntityTextsMapper'

export default class TextsMappersFactory {
  static jsonTextToTextEntityTextsMapper = ({config}) =>
    new JSONTextToTextEntityTextsMapper({
      textEntityFactory: TextEntitiesFactory.textEntity
    })
}

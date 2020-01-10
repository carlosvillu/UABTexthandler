import TextEntity from './TextEntity'

import TextsValueObjectsFactory from '../ValueObjects/factory'

export default class TextsEntitiesFactory {
  static textEntity = text =>
    new TextEntity({
      ...text,
      gender: TextsValueObjectsFactory.genreValueObject({genre: text.gender})
    })
}

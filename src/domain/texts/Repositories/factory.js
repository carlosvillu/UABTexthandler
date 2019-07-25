import {pickRnd, shuffle} from '../../../lib/array'
import {pipe} from '../../../lib/func'

import TextEntitiesFactory from '../Entities/factory'
import TextsValueObjectsFactory from '../ValueObjects/factory'

import FireBaseTextsRepository from './FireBaseTextsRepository'

export default class TextsRepositoriesFactory {
  static fireBaseTextsRepository = ({config}) =>
    new FireBaseTextsRepository({
      config,
      pickRnd,
      shuffle,
      pipe,
      textEntityFactory: TextEntitiesFactory.textEntity,
      textsCollectionValueObjectFactory:
        TextsValueObjectsFactory.textsCollectionValueObject
    })
}

import TextEntitiesFactory from '../Entities/factory'

import FireBaseTextsRepository from './FireBaseTextsRepository'

export default class TextsRepositoriesFactory {
  static fireBaseTextsRepository = ({config}) =>
    new FireBaseTextsRepository({
      config,
      textEntityFactory: TextEntitiesFactory.textEntity
    })
}

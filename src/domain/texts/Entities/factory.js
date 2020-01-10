import TextEntity from './TextEntity'

export default class TextsEntitiesFactory {
  static textEntity = text => new TextEntity(text)
}

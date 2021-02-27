import StudentEntity from './StudentEntity'
import TextEntity from './TextEntity'

export default class TextsEntitiesFactory {
  static textEntity = text => new TextEntity(text)
  static studentEntity = text => new StudentEntity(text)
}

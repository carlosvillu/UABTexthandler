import LevelValueObject from './LevelValueObject'

export default class TextsValueObjectsFactory {
  static levelValueObject = ({level}) => new LevelValueObject({level})
}

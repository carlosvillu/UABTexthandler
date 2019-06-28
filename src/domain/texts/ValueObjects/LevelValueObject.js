import {ValueObject} from '@s-ui/domain'

export default class LevelValueObject extends ValueObject {
  value() {
    return this._level
  }

  isEmpty() {
    return this._level === undefined
  }
}

import {ValueObject} from '@s-ui/domain'

export default class GenreValueObject extends ValueObject {
  value() {
    return this._genre
  }

  isEmpty() {
    return this._genre === undefined
  }
}

import ValueObject from '@s-ui/domain/lib/ValueObject'

export default class FiltersValueObject extends ValueObject {
  genre() {
    return this._genre
  }

  type() {
    return this._type
  }

  time() {
    return this._time
  }

  order() {
    return this._order
  }
}

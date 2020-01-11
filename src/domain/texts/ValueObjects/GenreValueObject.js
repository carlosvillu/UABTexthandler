import {ValueObject} from '@s-ui/domain'

export default class GenreValueObject extends ValueObject {
  static OPINION = 'OP'
  static NARRATIVE = 'NA'

  isOpinion() {
    return this._genre === GenreValueObject.OPINION
  }

  isNarrative() {
    return this._genre === GenreValueObject.NARRATIVE
  }

  value() {
    return this._genre
  }

  isEmpty() {
    return this._genre === undefined
  }

  isEqual({genre}) {
    return this._genre === genre.value()
  }
}

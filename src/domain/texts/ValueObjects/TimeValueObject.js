import {ValueObject} from '@s-ui/domain'

export default class TimeValueObject extends ValueObject {
  static PRE = 'PRE'
  static POST = 'POST'
  static MANT = 'MANT'

  isMant() {
    return this._time === TimeValueObject.MANT
  }

  value() {
    return this._time
  }
}

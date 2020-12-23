import {ValueObject} from '@s-ui/domain'

export default class TimeValueObject extends ValueObject {
  static PRE = 'PRE'
  static POST = 'POST'
  static MANT = 'MANT'
  static SEG1 = 'SEG1'
  static SEG2 = 'SEG2'

  isMant() {
    return this._time === TimeValueObject.MANT
  }

  value() {
    return this._time
  }
}

import {ValueObject} from '@s-ui/domain'

export default class TypeEvaluationValueObject extends ValueObject {
  static QUALITY = 'quality'
  static STRUCTURE = 'structure'

  isValid() {
    return this._type === 'quality' || this._type === 'structure'
  }

  value() {
    return this._type
  }
}

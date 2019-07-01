import {ValueObject} from '@s-ui/domain'

export default class TypeEvaluationValueObject extends ValueObject {
  isValid() {
    return this._type === 'quality' || this._type === 'structure'
  }

  value() {
    return this._type
  }
}

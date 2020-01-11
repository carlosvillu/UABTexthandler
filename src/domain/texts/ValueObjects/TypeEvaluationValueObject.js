import {ValueObject} from '@s-ui/domain'

export default class TypeEvaluationValueObject extends ValueObject {
  static QUALITY = 'quality'
  static STRUCTURE = 'structure'
  isValid() {
    return (
      this._type === TypeEvaluationValueObject.QUALITY ||
      this._type === TypeEvaluationValueObject.STRUCTURE
    )
  }

  isQuality() {
    return this._type === TypeEvaluationValueObject.QUALITY
  }

  isStructure() {
    return this._type === TypeEvaluationValueObject.STRUCTURE
  }

  value() {
    return this._type
  }

  maxNumberOfEvaluations() {
    if (this._type === TypeEvaluationValueObject.STRUCTURE) {
      return 2
    }
    if (this._type === TypeEvaluationValueObject.QUALITY) {
      return 2
    }
  }

  realiabilityMatrix() {
    if (this._type === TypeEvaluationValueObject.STRUCTURE) {
      // eslint-disable-next-line prettier/prettier
      return [
        [100, 1]
      ]
    }

    if (this._type === TypeEvaluationValueObject.QUALITY) {
      // eslint-disable-next-line prettier/prettier
      return [
        [100, 1],
        [20, 2]
      ]
    }
  }
}

import {ValueObject} from '@s-ui/domain'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

export default class TextsCollectionValueObject extends ValueObject {
  static RELIABILITY_THRESHOLD = 20 // %

  value() {
    return this._texts
  }

  shouldHaveNext({type, level}) {
    const maxNumberOfEvaluations = type.maxNumberOfEvaluations()
    if (type.value() === TypeEvaluationValueObject.STRUCTURE) {
      const compliantsTexts = this._texts.filter(
        text => text.numberOfEvaluations({type}) < maxNumberOfEvaluations
      )
      return Boolean(compliantsTexts.length)
    }

    if (type.value() === TypeEvaluationValueObject.QUALITY) {
      const textsByLevel = this._texts.filter(text => text.isLevel({level}))
      const compliantsTexts = textsByLevel.filter(text => {
        return text.numberOfEvaluations({type}) === maxNumberOfEvaluations
      })

      const percentageOfTextsCompliants =
        (100 * compliantsTexts.length) / textsByLevel.length

      return (
        percentageOfTextsCompliants <
        TextsCollectionValueObject.RELIABILITY_THRESHOLD
      )
    }

    return false
  }
}

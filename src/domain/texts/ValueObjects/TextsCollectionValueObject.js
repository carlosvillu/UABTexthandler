import {ValueObject} from '@s-ui/domain'

export default class TextsCollectionValueObject extends ValueObject {
  static RELIABILITY_THRESHOLD = 20 // %
  static RELIABILITY_THRESHOLD_FULL = 100 // %

  value() {
    return this._texts
  }

  shouldHaveNext({type, level, genre}) {
    const maxNumberOfEvaluations = type.maxNumberOfEvaluations()
    if (type.isStructure()) {
      const compliantsTexts = this._texts.filter(
        text => text.numberOfEvaluations({type}) === maxNumberOfEvaluations
      )

      const percentageOfTextsCompliants =
        (100 * compliantsTexts.length) / this._texts.length

      return (
        percentageOfTextsCompliants <
        TextsCollectionValueObject.RELIABILITY_THRESHOLD
      )
    }

    if (type.isQuality()) {
      const textsByLevelAndGenre = this._texts
        .filter(text => text.isLevel({level}))
        .filter(text => text.isGenre({genre}))
      const compliantsTexts = textsByLevelAndGenre.filter(text => {
        return text.numberOfEvaluations({type}) === maxNumberOfEvaluations
      })

      const percentageOfTextsCompliants =
        (100 * compliantsTexts.length) / textsByLevelAndGenre.length

      return (
        percentageOfTextsCompliants <
        (genre.isOpinion()
          ? TextsCollectionValueObject.RELIABILITY_THRESHOLD_FULL
          : TextsCollectionValueObject.RELIABILITY_THRESHOLD)
      )
    }

    return false
  }
}

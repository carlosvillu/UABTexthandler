import Entity from '@s-ui/domain/lib/Entity'

import GenreValueObject from '../ValueObjects/GenreValueObject'

export default class TextEntity extends Entity {
  static MAX_EVALUATIONS_BY_TEXT = 1
  id() {
    return this._id
  }

  prompt() {
    return this._prompt
  }

  idFile() {
    return this._idFile
  }

  isLevel({level}) {
    // an empty level means ANY level it is OK
    if (level.isEmpty()) {
      return true
    }

    return level.value() === this._level
  }

  isTime({time}) {
    return time.value() === this._time
  }

  isGenre({genre}) {
    // an empty genre means ANY genre it is OK
    if (genre.isEmpty()) {
      return true
    }

    return genre.value() === this._gender
  }

  numberOfEvaluations({type: typeVO}) {
    if (!this._evaluations || !this._evaluations[typeVO.value()]) {
      return 0
    }

    const evaluationsByType = this._evaluations[typeVO.value()] || []
    const uniqEvaluationsByType = new Set([...Object.values(evaluationsByType)])
    return uniqEvaluationsByType.size
  }

  isEvaluable({user, type: typeVO}) {
    if (!typeVO.isValid()) {
      return false
    }

    if (typeVO.isStructure() && this._gender === GenreValueObject.NARRATIVE) {
      return false
    }

    if (!this._evaluations) {
      return true
    }

    const evaluationsByType = this._evaluations[typeVO.value()]
    const numberOfEvaluations = this.numberOfEvaluations({type: typeVO})

    return (
      !evaluationsByType ||
      (numberOfEvaluations < typeVO.maxNumberOfEvaluations() &&
        !Object.keys(evaluationsByType).some(
          id => user.id() === evaluationsByType[id]
        ))
    )
  }
}

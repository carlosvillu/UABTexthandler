import Entity from '@s-ui/domain/lib/Entity'

export default class TextEntity extends Entity {
  static MAX_EVALUATIONS_BY_TEXT = 1
  id() {
    return this._id
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

  isEvaluable({user, type: typeVO}) {
    if (!typeVO.isValid()) {
      return false
    }

    if (!this._evaluations) {
      return true
    }

    const evaluationsByType = this._evaluations[typeVO.value()]

    return (
      !evaluationsByType ||
      (Object.keys(evaluationsByType).length <
        TextEntity.MAX_EVALUATIONS_BY_TEXT &&
        !Object.keys(evaluationsByType).some(
          id => user.id() === evaluationsByType[id]
        ))
    )
  }
}

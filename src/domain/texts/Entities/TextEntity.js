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

  isEvaluable({user}) {
    return (
      !this._evaluations ||
      (Object.keys(this._evaluations).length <
        TextEntity.MAX_EVALUATIONS_BY_TEXT &&
        !Object.keys(this._evaluations).some(
          id => user.id() === this._evaluations[id]
        ))
    )
  }
}

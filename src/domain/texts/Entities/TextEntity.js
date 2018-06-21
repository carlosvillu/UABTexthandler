import Entity from '@s-ui/domain/lib/Entity'

export default class TextEntity extends Entity {
  MAX_EVALUATIONS_BY_TEXT = 1
  isEvaluable() {
    return (
      !this._evaluations ||
      Object.keys(this._evaluations).length < TextEntity.MAX_EVALUATIONS_BY_TEXT
    )
  }
}

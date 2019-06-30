import {Entity} from '@s-ui/domain'

export default class QualityEvaluationEntity extends Entity {
  evaluator() {
    return this._userEmail
  }

  id() {
    return this._id
  }

  idFile() {
    return this._idFile
  }

  quality() {
    return this._quality
  }
}

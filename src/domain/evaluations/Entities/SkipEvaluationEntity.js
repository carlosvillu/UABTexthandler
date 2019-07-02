import {Entity} from '@s-ui/domain'

export default class SkipEvaluationEntity extends Entity {
  id() {
    return this._id
  }

  idFile() {
    return this._idFile
  }

  quality() {
    return this._quality || 0
  }

  structure() {
    return this._structure || 0
  }
}

import Entity from '@s-ui/domain/lib/Entity'

export default class TextEntity extends Entity {
  id() {
    return this._id
  }

  idFile() {
    return this._idFile
  }
}

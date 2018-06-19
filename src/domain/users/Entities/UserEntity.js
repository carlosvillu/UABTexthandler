import Entity from '@s-ui/domain/lib/Entity'

export default class UserEntity extends Entity {
  isAdmin() {
    return Boolean(this._isAdmin)
  }
}

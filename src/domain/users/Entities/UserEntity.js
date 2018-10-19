import Entity from '@s-ui/domain/lib/Entity'

export default class UserEntity extends Entity {
  id() {
    return this._id
  }

  email() {
    return this._email
  }

  isAdmin() {
    return Boolean(this._isAdmin)
  }
}

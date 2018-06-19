export default class LogoutUsersService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute() {
    return this._repository.logout()
  }
}

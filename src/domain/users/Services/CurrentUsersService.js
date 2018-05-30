export default class CurrentUsersService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute() {
    return this._repository.current()
  }
}

export default class LoginUsersService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({email, password} = {}) {
    return this._repository.login({email, password})
  }
}

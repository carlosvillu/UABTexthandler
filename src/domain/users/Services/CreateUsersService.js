export default class CreateUsersService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({email, password, name} = {}) {
    return this._repository.create({email, password, name})
  }
}

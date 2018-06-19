export default class CreateUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute({email, name, password} = {}) {
    const userEntity = await this._service.execute({email, password, name})
    return userEntity.toJSON()
  }
}

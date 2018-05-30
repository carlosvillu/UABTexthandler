export default class LoginUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute({email, password} = {}) {
    debugger //eslint-disable-line
    const userEntity = await this._service.execute({email, password})
    return userEntity.toJSON()
  }
}

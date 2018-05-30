export default class CurrentUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    const userEntity = await this._service.execute()
    return userEntity && userEntity.toJSON()
  }
}

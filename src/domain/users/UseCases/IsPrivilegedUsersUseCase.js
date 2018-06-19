export default class IsPrivilegedUsersUseCase {
  constructor({currentUsersService} = {}) {
    this._currentUsersService = currentUsersService
  }

  async execute() {
    const userEntity = await this._currentUsersService.execute()
    return userEntity && userEntity.isAdmin()
  }
}

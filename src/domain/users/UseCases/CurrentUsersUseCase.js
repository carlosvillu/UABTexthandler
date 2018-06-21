import {streamify} from '@s-ui/decorators'

@streamify('execute')
class CurrentUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    const userEntity = await this._service.execute()
    return userEntity && userEntity.toJSON()
  }
}

export default CurrentUsersUseCase

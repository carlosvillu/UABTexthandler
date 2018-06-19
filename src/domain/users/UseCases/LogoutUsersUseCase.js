import {streamify} from '@s-ui/decorators'

@streamify('execute')
class LogoutUsersUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  execute() {
    return this._service.execute()
  }
}

export default LogoutUsersUseCase

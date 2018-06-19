import UsersRepositoriesFactory from '../Repositories/factory'

import CreateUsersService from './CreateUsersService'
import CurrentUsersService from './CurrentUsersService'
import LoginUsersService from './LoginUsersService'
import LogoutUsersService from './LogoutUsersService'

export default class UsersServicesFactory {
  static currentUsersService = ({config}) =>
    new CurrentUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static loginUsersService = ({config}) => {
    return new LoginUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })
  }

  static createUsersService = ({config}) =>
    new CreateUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static logoutUsersService = ({config}) =>
    new LogoutUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })
}

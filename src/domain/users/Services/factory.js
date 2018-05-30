import UsersRepositoriesFactory from '../Repositories/factory'

import CurrentUsersService from './CurrentUsersService'
import LoginUsersService from './LoginUsersService'

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
}

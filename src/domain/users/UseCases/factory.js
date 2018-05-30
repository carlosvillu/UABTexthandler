import UsersServicesFactory from '../Services/factory'

import CurrentUsersUseCase from './CurrentUsersUseCase'
import LoginUsersUseCase from './LoginUsersUseCase'

export default class UsersUseCasesFactory {
  static currentUsersUseCase = ({config}) =>
    new CurrentUsersUseCase({
      service: UsersServicesFactory.currentUsersService({config})
    })

  static loginUsersUseCase = ({config}) =>
    new LoginUsersUseCase({
      service: UsersServicesFactory.loginUsersService({config})
    })
}

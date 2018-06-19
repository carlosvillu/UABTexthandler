import UsersServicesFactory from '../Services/factory'

import CreateUsersUseCase from './CreateUsersUseCase'
import CurrentUsersUseCase from './CurrentUsersUseCase'
import IsPrivilegedUsersUseCase from './IsPrivilegedUsersUseCase'
import LoginUsersUseCase from './LoginUsersUseCase'
import LogoutUsersUseCase from './LogoutUsersUseCase'

export default class UsersUseCasesFactory {
  static currentUsersUseCase = ({config}) =>
    new CurrentUsersUseCase({
      service: UsersServicesFactory.currentUsersService({config})
    })

  static loginUsersUseCase = ({config}) =>
    new LoginUsersUseCase({
      service: UsersServicesFactory.loginUsersService({config})
    })

  static createUsersUseCase = ({config}) =>
    new CreateUsersUseCase({
      service: UsersServicesFactory.createUsersService({config})
    })

  static logoutUsersUseCase = ({config}) =>
    new LogoutUsersUseCase({
      service: UsersServicesFactory.logoutUsersService({config})
    })

  static isPrivilegedUsersUseCase = ({config}) =>
    new IsPrivilegedUsersUseCase({
      currentUsersService: UsersServicesFactory.currentUsersService({config})
    })
}

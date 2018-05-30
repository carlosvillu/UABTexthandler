import UsersEntitiesFactory from '../Entities/factory.js'

import FireBaseUsersRepository from './FireBaseUsersRepository'

export default class UsersResporiesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      userEntityFactory: UsersEntitiesFactory.userEntity
    })
}

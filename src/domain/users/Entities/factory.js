import UserEntity from './UserEntity'

export default class UsersEntitiesFactory {
  static userEntity = props => new UserEntity(props)
}

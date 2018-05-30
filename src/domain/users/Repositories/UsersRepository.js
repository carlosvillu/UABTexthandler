export default class UsersRepository {
  current() {
    throw Error('[UsersRepository#current] must be implemented')
  }

  create() {
    throw Error('[UsersRepository#create] must be implemented')
  }

  login() {
    throw Error('[UsersRepository#login] must be implemented')
  }

  logout() {
    throw Error('[UsersRepository#logout] must be implemented')
  }
}

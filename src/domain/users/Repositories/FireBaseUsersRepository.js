import UsersRepository from './UsersRepository'

export default class FireBaseUsersRepository extends UsersRepository {
  constructor ({config, userEntityFactory} = {}) {
    super()

    this._config = config
    this._userEntityFactory = userEntityFactory
  }

  async current () {
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser

    if (!user) { return false }

    const {email, id} = (await firebase.database().ref(`/users/${user.uid}`).once('value')).val()
    return this._userEntityFactory({email, id})
  }

  async create ({email, name, password} = {}) {
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await firebase.database().ref(`/users/${user.uid}`).set({
      email,
      id: user.uid
    })

    return this._userEntityFactory({email, id: user.uid})
  }

  async login ({email, password} = {}) {
    const firebase = this._config.get('firebase')
    const {uid} = await firebase.auth().signInWithEmailAndPassword(email, password)

    const user = (await firebase.database().ref(`/users/${uid}`).once('value')).val()
    return this._userEntityFactory(user)
  }

  logout () {
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}

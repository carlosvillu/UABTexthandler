export default class RefsManager {
  constructor({firebase} = {}) {
    this._refs = {}
    this._firebase = firebase
  }

  ref({path} = {}) {
    this._refs[path] = this._refs[path] || this._firebase.database().ref(path)
    return this._refs[path]
  }
}

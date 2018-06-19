import TextsRepository from './TextsRepository'

export default class FireBaseTextsRepository extends TextsRepository {
  constructor({config, textEntityFactory} = {}) {
    super()

    this._config = config
    this._textEntityFactory = textEntityFactory
  }

  upload(textEntity) {
    const refsManager = this._config.get('refsManager')
    const textsRef = refsManager.ref({path: '/texts'})
    const id = textsRef.push().key
    const fullTextEntity = this._textEntityFactory({
      ...textEntity.toJSON(),
      id,
      createdAt: Date.now()
    })
    return new Promise((resolve, reject) => {
      refsManager
        .ref({path: `/texts/${id}`})
        .set(fullTextEntity.toJSON(), error => {
          if (error) {
            return reject(error)
          }
          resolve(fullTextEntity)
        })
    })
  }

  async all() {
    const refsManager = this._config.get('refsManager')
    const textsRef = refsManager.ref({path: '/texts'})
    const texts = (await textsRef.once('value')).val() || {}
    return Object.keys(texts).map(key => this._textEntityFactory(texts[key]))
  }
}

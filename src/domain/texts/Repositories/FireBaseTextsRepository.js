import TextsRepository from './TextsRepository'

export default class FireBaseTextsRepository extends TextsRepository {
  constructor({config, textEntityFactory, pickRnd, shuffle, pipe} = {}) {
    super()

    this._config = config
    this._textEntityFactory = textEntityFactory
    this._pickRnd = pickRnd
    this._shuffle = shuffle
    this._pipe = pipe
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

  async next({user}) {
    const texts = await this.all()

    const nextText = this._pipe(this._shuffle, this._pickRnd)(
      texts.filter(text => text.isEvaluable({user}))
    )
    return nextText
  }

  async saveEvaluation({evaluation, text, user}) {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations'})
    const id = evaluationsRef.push().key
    const addEvaluationPromise = refsManager
      .ref({path: `/evaluations/${id}`})
      .set({
        ...evaluation.toJSON(),
        idText: text.id(),
        idFile: text.idFile(),
        idUser: user.id(),
        userEmail: user.email(),
        createdAt: Date.now()
      })
    const updateTextsEvaluationsPromise = refsManager
      .ref({path: `/texts/${text.id()}/evaluations`})
      .update({[id]: user.id()})

    const [evaluationDoc, textDoc] = await Promise.all([
      addEvaluationPromise,
      updateTextsEvaluationsPromise
    ])

    return {evaluationDoc, textDoc}
  }
}

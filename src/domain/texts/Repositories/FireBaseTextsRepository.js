import TextsRepository from './TextsRepository'

export default class FireBaseTextsRepository extends TextsRepository {
  constructor({
    config,
    pickRnd,
    pipe,
    shuffle,
    textEntityFactory,
    genreValueObjectFactory,
    levelValueObjectFactory,
    timeValueObjectFactory,
    textsCollectionValueObjectFactory
  }) {
    super()

    this._config = config
    this._pickRnd = pickRnd
    this._pipe = pipe
    this._shuffle = shuffle
    this._textEntityFactory = textEntityFactory
    this._genreValueObjectFactory = genreValueObjectFactory
    this._levelValueObjectFactory = levelValueObjectFactory
    this._timeValueObjectFactory = timeValueObjectFactory
    this._textsCollectionValueObjectFactory = textsCollectionValueObjectFactory
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
    const textsEntities = Object.keys(texts).map(key =>
      this._textEntityFactory(texts[key])
    )
    return this._textsCollectionValueObjectFactory({texts: textsEntities})
  }

  async next({user, level, type, genre}) {
    const texts = await this.all()

    if (!texts.shouldHaveNext({type, level, genre})) {
      return null // return empty text
    }

    const nextText = this._pipe(
      this._shuffle,
      this._pickRnd
    )(
      texts
        .value()
        .filter(text => text.isEvaluable({user, type}))
        .filter(text => text.isLevel({level}))
        .filter(text => text.isGenre({genre}))
        .filter(text => {
          const opinionGenre = this._genreValueObjectFactory({
            genre: this._config.get('GENRE').OPINION
          })

          const isSEG1ORSEG2 =
            text.isTime({
              time: this._timeValueObjectFactory({
                time: this._config.get('TIME').SEG1
              })
            }) ||
            text.isTime({
              time: this._timeValueObjectFactory({
                time: this._config.get('TIME').SEG2
              })
            })

          // (Opinion && Estructura && (SEG1 || SEG2)) Estos no deben aparecer
          if (
            text.isGenre({genre: opinionGenre}) &&
            type.isStructure() &&
            isSEG1ORSEG2
          ) {
            return false
          }
          return true
        })

      //
      // this code avoided displaying certain texts according to their grade level
      // or time point (e.g., do NOT show texts by 8th graders)
      //
      // .filter(text => {
      //  const opinionGenre = this._genreValueObjectFactory({
      //    genre: this._config.get('GENRE').OPINION
      //  })
      //  if (!text.isGenre({genre: opinionGenre})) return true

      //  return !text.isLevel({
      //    level: this._levelValueObjectFactory({
      //      level: this._config.get('GRADES').SECOND_ESO
      //    })
      //  })
      // })
      // .filter(text => {
      //  const opinionGenre = this._genreValueObjectFactory({
      //    genre: this._config.get('GENRE').OPINION
      //  })
      //  if (!text.isGenre({genre: opinionGenre})) return true

      //  return !text.isTime({
      //    time: this._timeValueObjectFactory({
      //      time: this._config.get('TIME').MANT
      //    })
      //  })
      // })
    )
    return nextText
  }

  async saveEvaluationStructure({evaluation, text, user}) {
    // TODO: Move this part to the evaluation context
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/structure'})
    const id = evaluationsRef.push().key
    const addEvaluationPromise = refsManager
      .ref({path: `/evaluations/structure/${id}`})
      .set({
        ...evaluation.toJSON(),
        idText: text.id(),
        idFile: text.idFile(),
        idUser: user.id(),
        userEmail: user.email(),
        createdAt: Date.now()
      })
    const updateTextsEvaluationsPromise = refsManager
      .ref({path: `/texts/${text.id()}/evaluations/structure`})
      .update({[id]: user.id()})

    const [evaluationDoc, textDoc] = await Promise.all([
      addEvaluationPromise,
      updateTextsEvaluationsPromise
    ])

    return {evaluationDoc, textDoc}
  }

  async saveEvaluationQuality({quality, text, user}) {
    // TODO: Move this part to the evaluation context
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/quality'})
    const id = evaluationsRef.push().key
    const addEvaluationPromise = refsManager
      .ref({path: `/evaluations/quality/${id}`})
      .set({
        ...quality.toJSON(),
        idText: text.id(),
        idFile: text.idFile(),
        idUser: user.id(),
        userEmail: user.email(),
        createdAt: Date.now()
      })
    const updateTextsEvaluationsPromise = refsManager
      .ref({path: `/texts/${text.id()}/evaluations/quality`})
      .update({[id]: user.id()})

    const [evaluationDoc, textDoc] = await Promise.all([
      addEvaluationPromise,
      updateTextsEvaluationsPromise
    ])

    return {evaluationDoc, textDoc}
  }

  async updatePrompt({text}) {
    const refsManager = this._config.get('refsManager')
    const doc =
      (
        await refsManager
          .ref({path: '/texts'})
          .orderByChild('idFile')
          .equalTo(text.idFile())
          .once('value')
      ).val() || {}

    if (Object.keys(doc).length) {
      const [id] = Object.keys(doc)
      await refsManager
        .ref({path: `/texts/${id}`})
        .update({prompt: text.prompt()})
    }
  }

  /**
   * @param {object} params
   * @param {import("../Entities/StudentEntity").default} params.student
   * */
  async createStudent({student}) {
    const refsManager = this._config.get('refsManager')

    return new Promise((resolve, reject) => {
      refsManager
        .ref({path: `/students/${student.id()}`})
        .set(student.toJSON(), error => {
          if (error) {
            return reject(error)
          }
          resolve(student)
        })
    })
  }
}

import EvaluationsRepository from './EvaluationsRepository'

export default class FireBaseEvaluationsRepository extends EvaluationsRepository {
  constructor({
    config,
    qualityEvaluationEntityFactory,
    skipEvaluationEntityFactory,
    structureEvaluationEntityFactory,
    textEntityFactory,
    studentEntityFactory
  }) {
    super()

    this._config = config
    this._textEntityFactory = textEntityFactory
    this._studentEntityFactory = studentEntityFactory
    this._qualityEvaluationEntityFactory = qualityEvaluationEntityFactory
    this._skipEvaluationEntityFactory = skipEvaluationEntityFactory
    this._structureEvaluationEntityFactory = structureEvaluationEntityFactory
  }

  async allTexts() {
    const refsManager = this._config.get('refsManager')
    const textsRef = refsManager.ref({path: '/texts'})
    const texts = (await textsRef.once('value')).val() || {}
    return Object.keys(texts).map(key =>
      this._textEntityFactory({id: key, ...texts[key]})
    )
  }

  async allStudents() {
    const refsManager = this._config.get('refsManager')
    const studentsRef = refsManager.ref({path: '/students'})
    const students = (await studentsRef.once('value')).val() || {}
    return Object.keys(students).map(key => {
      return this._studentEntityFactory({studentID: students[key].id})
    })
  }

  async allStructure() {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/structure'})
    const evaluations = (await evaluationsRef.once('value')).val() || {}
    return Object.keys(evaluations).map(key =>
      this._structureEvaluationEntityFactory({id: key, ...evaluations[key]})
    )
  }

  async allQuality() {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/quality'})
    const evaluations = (await evaluationsRef.once('value')).val() || {}
    return Object.keys(evaluations).map(key =>
      this._qualityEvaluationEntityFactory({
        ...evaluations[key],
        evaluator: evaluations[key].userEmail,
        id: key
      })
    )
  }

  async allSkips() {
    const refsManager = this._config.get('refsManager')
    const skipsRef = refsManager.ref({path: '/skips'})
    const skips = (await skipsRef.once('value')).val() || {}
    return Object.entries(skips).map(([id, doc]) => {
      return this._skipEvaluationEntityFactory({...doc, id})
    })
  }

  async skip({text, type}) {
    const refsManager = this._config.get('refsManager')
    const skipTextRef = refsManager.ref({
      path: `/skips/${text.id()}`
    })
    const entry = (await skipTextRef.once('value')).val() || {}

    await skipTextRef.set({
      ...entry,
      idFile: text.idFile(),
      [type.value()]: (entry[type.value()] || 0) + 1
    })
  }

  async without() {
    const refsManager = this._config.get('refsManager')
    const textsRef = refsManager.ref({path: '/texts'})
    const texts = (await textsRef.once('value')).val() || {}
    const textEntities = Object.entries(texts)
      .map(([, text]) => this._textEntityFactory(text))
      .filter(textEntity => !textEntity.hasQualityEvaluation())
    return textEntities
  }
}

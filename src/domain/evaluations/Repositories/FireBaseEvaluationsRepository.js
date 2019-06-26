import EvaluationsRepository from './EvaluationsRepository'

export default class FireBaseEvaluationsRepository extends EvaluationsRepository {
  constructor({config, evaluationsEntityFactory} = {}) {
    super()

    this._config = config
    this._evaluationEntityFactory = evaluationsEntityFactory
  }

  async allStructure() {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/structure'})
    const evaluations = (await evaluationsRef.once('value')).val() || {}
    return Object.keys(evaluations).map(key =>
      this._evaluationEntityFactory(evaluations[key])
    )
  }
}

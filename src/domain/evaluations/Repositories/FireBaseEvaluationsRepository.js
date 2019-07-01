import EvaluationsRepository from './EvaluationsRepository'

export default class FireBaseEvaluationsRepository extends EvaluationsRepository {
  constructor({
    config,
    qualityEvaluationEntityFactory,
    structureEvaluationEntityFactory
  } = {}) {
    super()

    this._config = config
    this._qualityEvaluationEntityFactory = qualityEvaluationEntityFactory
    this._structureEvaluationEntityFactory = structureEvaluationEntityFactory
  }

  async allStructure() {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/structure'})
    const evaluations = (await evaluationsRef.once('value')).val() || {}
    return Object.keys(evaluations).map(key =>
      this._structureEvaluationEntityFactory(evaluations[key])
    )
  }

  async allQuality() {
    const refsManager = this._config.get('refsManager')
    const evaluationsRef = refsManager.ref({path: '/evaluations/quality'})
    const evaluations = (await evaluationsRef.once('value')).val() || {}
    return Object.keys(evaluations).map(key =>
      this._qualityEvaluationEntityFactory({
        ...evaluations[key],
        evaluator: evaluations[key].userEmail
      })
    )
  }
}

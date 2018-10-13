import {pipe} from '../../../lib/func'
import {deepFlatten} from '../../../lib/array'

const notNull = evaluation => (field, map = i => i) => errors => [
  ...errors,
  evaluation[field] != null ? false : map(field)
]

const notNullReasons = evaluation => errors =>
  deepFlatten([
    ...errors,
    ...evaluation.reasons.map((reason, index) =>
      notNull(reason)('justification', field => `Reason #${index + 1}`)([])
    )
  ])

const mandatoryTypeOfReason = evaluation => errors =>
  deepFlatten([
    ...errors,
    ...evaluation.reasons.map((reason, index) => {
      const {justification} = reason
      const [first] = reason.types

      // Magic String, maybe I have to refactor and put this in the config :(
      if (!justification || justification === 'NO') {
        return false
      }

      return justification === 'YES' && first != null // And more magics strings
        ? false
        : `Type reason #${index + 1}`
    })
  ])

export default class EvaluationTextsRequest {
  static validate = ({evaluation, evaluationTextsErrorFactory}) => {
    const errors = pipe(
      notNull(evaluation)('conclusion'),
      notNull(evaluation)('extensive'),
      notNull(evaluation)('introduction'),
      notNull(evaluation)('introduction'),
      notNull(evaluation)('opinion'),
      notNull(evaluation)('opinionConector'),
      notNull(evaluation)('otherOpinion'),
      notNull(evaluation)('synthetic'),
      notNullReasons(evaluation),
      mandatoryTypeOfReason(evaluation)
    )([]).filter(Boolean)

    if (errors.length) {
      throw evaluationTextsErrorFactory(errors)
    }
  }
  constructor({
    introduction,
    opinion,
    reasons,
    extensive,
    synthetic,
    otherOpinion,
    opinionConector,
    reasonConectors,
    reasonExplication,
    conclusion,
    otherConectors,
    freeText
  } = {}) {
    this._introduction = introduction
    this._opinion = opinion
    this._reasons = reasons
    this._extensive = extensive
    this._synthetic = synthetic
    this._otherOpinion = otherOpinion
    this._opinionConector = opinionConector
    this._reasonConectors = reasonConectors
    this._reasonExplication = reasonExplication
    this._conclusion = conclusion
    this._otherConectors = otherConectors
    this._freeText = freeText
  }
}

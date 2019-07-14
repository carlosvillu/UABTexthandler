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

// const mandatoryTypeOfReason = evaluation => errors =>
//   deepFlatten([
//     ...errors,
//     ...evaluation.reasons.map((reason, index) => {
//       const {justification} = reason
//       const [first] = reason.types
//
//       // Magic String, maybe I have to refactor and put this in the config :(
//       if (!justification || justification === 'NO') {
//         return false
//       }
//
//       return justification === 'YES' && first != null // And more magics strings
//         ? false
//         : `Type reason #${index + 1}`
//     })
//   ])

const mandatoryTypeOfEndConclusion = evaluation => errors => {
  if (evaluation.endConclusion === 'YES' && !evaluation.endTypeConclusion) {
    return [...errors, 'EndTypeConslusion is empty']
  }

  if (evaluation.endConclusion === 'NO' && evaluation.endTypeConclusion) {
    return [...errors, 'EndTypeConslusion should be empty']
  }
  return errors
}

const onlyOneTypeOpinion = evaluation => errors => {
  const numberYES = ['extensive', 'synthetic', 'otherOpinion'].reduce(
    (acc, key) => {
      if (evaluation[key] === 'YES') {
        return (acc = acc + 1)
      }
      return acc
    },
    0
  )

  return numberYES > 1 ? [...errors, `Only one opinion`] : errors
}

export default class EvaluationTextsRequest {
  static validate = ({evaluation, evaluationTextsErrorFactory}) => {
    const errors = pipe(
      notNull(evaluation)('conclusion'),
      notNull(evaluation)('introduction'),
      notNull(evaluation)('opinion'),
      notNull(evaluation)('opinionConector'),
      notNull(evaluation)('endConclusion'),
      onlyOneTypeOpinion(evaluation),
      notNullReasons(evaluation),
      mandatoryTypeOfEndConclusion(evaluation)
      // mandatoryTypeOfReason(evaluation)
    )([]).filter(Boolean)

    if (errors.length) {
      throw evaluationTextsErrorFactory({errors})
    }
  }
  constructor({
    introduction,
    opinion,
    reasons,
    opinionConector,
    reasonConectors,
    reasonExplication,
    conclusion,
    endConclusion,
    endTypeConclusion,
    otherConectors,
    freeText
  }) {
    this._introduction = introduction
    this._opinion = opinion
    this._reasons = reasons
    this._endConclusion = endConclusion
    this._endTypeConclusion = endTypeConclusion
    this._opinionConector = opinionConector
    this._reasonConectors = reasonConectors
    this._reasonExplication = reasonExplication
    this._conclusion = conclusion
    this._otherConectors = otherConectors
    this._freeText = freeText
  }

  toJSON() {
    return {
      introduction: this._introduction,
      opinion: this._opinion,
      reasons: this._reasons,
      endConclusion: this._endConclusion,
      endTypeConclusion: this._endTypeConclusion,
      opinionConector: this._opinionConector,
      reasonConectors: this._reasonConectors,
      reasonExplication: this._reasonExplication,
      conclusion: this._conclusion,
      freeText: this._freeText
    }
  }
}

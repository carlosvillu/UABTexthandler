import Entity from '@s-ui/domain/lib/Entity'

export default class EvaluationEntity extends Entity {
  evaluator() {
    return this._userEmail
  }

  idFile() {
    return this._idFile
  }

  introduction() {
    return this._introduction
  }

  opinion() {
    return this._opinion
  }

  extensive() {
    return this._extensive
  }

  synthetic() {
    return this._synthetic
  }

  otherOpinion() {
    return this._otherOpinion
  }

  opinionConnector() {
    return this._opinionConector
  }

  reasonConnectors() {
    return this._reasonConectors
  }

  reasonExplication() {
    return this._reasonExplication
  }

  conclusion() {
    return this._conclusion
  }

  numberOfPositiveReasons() {
    return this._reasons.filter(r => r.justification === 'YES').length
  }

  numberOfExpEvidencie() {
    return this._reasons.filter(
      r => r.justification === 'YES' && r.types.some(t => t === 'evidences')
    ).length
  }

  numberOfExpExample() {
    return this._reasons.filter(
      r => r.justification === 'YES' && r.types.some(t => t === 'example')
    ).length
  }

  numberOfExpExpert() {
    return this._reasons.filter(
      r => r.justification === 'YES' && r.types.some(t => t === 'experts')
    ).length
  }

  numberOfExpOther() {
    return this._reasons.filter(
      r => r.justification === 'YES' && r.types.some(t => t === 'others')
    ).length
  }
}

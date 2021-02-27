import Entity from '@s-ui/domain/lib/Entity'

export default class StructureEvaluationEntity extends Entity {
  evaluator() {
    return this._userEmail
  }

  id() {
    return this._id
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

  endConclusion() {
    return this._endConclusion
  }

  endTypeConclusion() {
    return this._endTypeConclusion
  }

  numberOfPositiveReasons() {
    return this._reasons.filter(r => r.justification === 'YES').length
  }

  numberOfExpEvidencie() {
    return this._reasons.filter(
      r =>
        r.justification === 'YES' &&
        r.types &&
        r.types.some(t => t === 'evidences')
    ).length
  }

  numberOfExpExample() {
    return this._reasons.filter(
      r =>
        r.justification === 'YES' &&
        r.types &&
        r.types.some(t => t === 'example')
    ).length
  }

  numberOfExpExpert() {
    return this._reasons.filter(
      r =>
        r.justification === 'YES' &&
        r.types &&
        r.types.some(t => t === 'experts')
    ).length
  }

  numberOfExpOther() {
    return this._reasons.filter(
      r =>
        r.justification === 'YES' &&
        r.types &&
        r.types.some(t => t === 'others')
    ).length
  }
}

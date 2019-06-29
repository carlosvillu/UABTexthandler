export default class EvaluationTextsError extends Error {
  constructor({errors}) {
    super()
    this._errors = errors
  }

  errors() {
    return this._errors
  }
}

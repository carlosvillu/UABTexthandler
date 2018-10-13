class ExtendableError extends Error {
  constructor(message) {
    super(JSON.stringify(message))
    Object.setPrototypeOf(this, ExtendableError.prototype)
    this.name = this.constructor.name
  }

  toJSON() {
    return {errors: JSON.parse(this.message)}
  }
}

export default class EvaluationTextsError extends ExtendableError {}

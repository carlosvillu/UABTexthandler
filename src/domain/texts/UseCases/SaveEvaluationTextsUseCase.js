class SaveEvaluationTextsUseCase {
  constructor({requestFactory} = {}) {
    this._requestFactory = requestFactory
  }

  async execute({user, evaluation, text}) {
    const evaluationRequest = this._requestFactory(evaluation)
    console.log(evaluationRequest)
  }
}

export default SaveEvaluationTextsUseCase

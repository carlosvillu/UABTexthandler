class SaveEvaluationTextsUseCase {
  constructor({
    requestFactory,
    userEntityFactory,
    textEntityFactory,
    service
  } = {}) {
    this._requestFactory = requestFactory
    this._userEntityFactory = userEntityFactory
    this._textEntityFactory = textEntityFactory
    this._service = service
  }

  async execute({user, evaluation, text}) {
    const evaluationDoc = this._service.execute({
      evaluation: this._requestFactory(evaluation),
      text: this._textEntityFactory(text),
      user: this._userEntityFactory(user)
    })
    console.log(evaluationDoc) // eslint-disable-line
  }
}

export default SaveEvaluationTextsUseCase

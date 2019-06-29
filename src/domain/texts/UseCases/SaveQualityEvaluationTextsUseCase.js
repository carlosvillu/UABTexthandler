class SaveQualityEvaluationTextsUseCase {
  constructor({
    qualityValueObjectFactory,
    service,
    textEntityFactory,
    userEntityFactory
  } = {}) {
    this._qualityValueObjectFactory = qualityValueObjectFactory
    this._service = service
    this._textEntityFactory = textEntityFactory
    this._userEntityFactory = userEntityFactory
  }

  async execute({user, quality, text}) {
    const evaluationDoc = this._service.execute({
      quality: this._qualityValueObjectFactory({quality}),
      text: this._textEntityFactory(text),
      user: this._userEntityFactory(user)
    })
    console.log(evaluationDoc) // eslint-disable-line
  }
}

export default SaveQualityEvaluationTextsUseCase

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

  execute({user, quality, text}) {
    return this._service.execute({
      quality: this._qualityValueObjectFactory({quality}),
      text: this._textEntityFactory(text),
      user: this._userEntityFactory(user)
    })
  }
}

export default SaveQualityEvaluationTextsUseCase

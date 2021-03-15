class SaveQualityEvaluationTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({quality, text, user}) {
    return this._repository.saveEvaluationQuality({quality, text, user})
  }
}

export default SaveQualityEvaluationTextsService

class SaveEvaluationTextsService {
  constructor({repository, mapper} = {}) {
    this._repository = repository
  }

  execute({evaluation, text, user}) {
    return this._repository.saveEvaluation({evaluation, text, user})
  }
}

export default SaveEvaluationTextsService

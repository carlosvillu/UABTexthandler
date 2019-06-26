class SaveEvaluationTextsService {
  constructor({repository, mapper} = {}) {
    this._repository = repository
  }

  execute({evaluation, text, user}) {
    return this._repository.saveEvaluationStructure({evaluation, text, user})
  }
}

export default SaveEvaluationTextsService

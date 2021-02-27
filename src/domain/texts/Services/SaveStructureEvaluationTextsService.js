class SaveStructureEvaluationTextsService {
  constructor({repository}) {
    this._repository = repository
  }

  execute({evaluation, text, user}) {
    return this._repository.saveEvaluationStructure({evaluation, text, user})
  }
}

export default SaveStructureEvaluationTextsService

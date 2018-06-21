class GetNextEvaluationTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute() {
    return this._repository.next()
  }
}

export default GetNextEvaluationTextsService

class GetNextEvaluationTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({user, type, level}) {
    return this._repository.next({user, type, level})
  }
}

export default GetNextEvaluationTextsService

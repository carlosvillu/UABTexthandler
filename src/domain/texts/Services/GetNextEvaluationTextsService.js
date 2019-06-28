class GetNextEvaluationTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({user, level}) {
    return this._repository.next({user, level})
  }
}

export default GetNextEvaluationTextsService

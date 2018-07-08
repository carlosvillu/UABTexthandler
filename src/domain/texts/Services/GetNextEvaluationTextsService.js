class GetNextEvaluationTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute({user}) {
    return this._repository.next({user})
  }
}

export default GetNextEvaluationTextsService

class GetNextEvaluationTextsService {
  constructor({repository}) {
    this._repository = repository
  }

  execute({user, type, level, genre}) {
    return this._repository.next({user, type, level, genre})
  }
}

export default GetNextEvaluationTextsService

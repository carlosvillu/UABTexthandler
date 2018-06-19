class GetAllTextsService {
  constructor({repository} = {}) {
    this._repository = repository
  }

  execute() {
    return this._repository.all()
  }
}

export default GetAllTextsService

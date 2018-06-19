class UploadTextsService {
  constructor({repository, mapper} = {}) {
    this._repository = repository
    this._mapper = mapper
  }

  execute({filename, body}) {
    const textEntity = this._mapper.map({filename, body})
    return this._repository.upload(textEntity)
  }
}

export default UploadTextsService

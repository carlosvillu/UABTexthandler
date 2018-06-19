class GetAllTextsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    const textsEntities = await this._service.execute()
    return textsEntities.map(entity => entity.toJSON())
  }
}

export default GetAllTextsUseCase

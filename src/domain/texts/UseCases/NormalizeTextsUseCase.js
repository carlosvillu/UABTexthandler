class NormalizeTextsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute({text}) {
    const textNormalizated = await this._service.execute({text})
    return textNormalizated
  }
}

export default NormalizeTextsUseCase

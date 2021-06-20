class NormalizeTextsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute({text, corpusAnalytics}) {
    const textNormalizated = await this._service.execute({
      text,
      corpusAnalytics
    })
    return textNormalizated
  }
}

export default NormalizeTextsUseCase

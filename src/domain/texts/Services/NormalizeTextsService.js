class NormalizeTextsService {
  constructor({mapper} = {}) {
    this._mapper = mapper
  }

  execute({text, corpusAnalytics}) {
    return this._mapper.map(text, corpusAnalytics)
  }
}

export default NormalizeTextsService

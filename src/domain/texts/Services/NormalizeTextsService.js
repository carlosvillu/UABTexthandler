class NormalizeTextsService {
  constructor({mapper} = {}) {
    this._mapper = mapper
  }

  execute({text}) {
    return this._mapper.map(text)
  }
}

export default NormalizeTextsService

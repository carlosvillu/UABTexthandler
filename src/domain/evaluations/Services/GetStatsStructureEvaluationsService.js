class GetStatsStructureEvaluationsService {
  constructor({repository, mapper} = {}) {
    this._repository = repository
    this._mapper = mapper
  }

  async execute() {
    const evaluationsList = await this._repository.allStructure()
    return this._mapper.map(evaluationsList)
  }
}

export default GetStatsStructureEvaluationsService

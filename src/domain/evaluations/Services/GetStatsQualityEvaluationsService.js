import {Service} from '@s-ui/domain'

export default class GetStatsQualityEvaluationsService extends Service {
  constructor({repository, mapper} = {}) {
    super()
    this._repository = repository
    this._mapper = mapper
  }

  async execute() {
    const qualityEvaluationEntities = await this._repository.allQuality()
    debugger // eslint-disable-line
    return qualityEvaluationEntities.map(this._mapper.map)
  }
}

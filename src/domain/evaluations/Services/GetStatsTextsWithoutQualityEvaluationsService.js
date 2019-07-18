import {Service} from '@s-ui/domain'

export default class GetStatsTextsWithoutQualityEvaluationsService extends Service {
  constructor({repository, mapper}) {
    super()
    this._repository = repository
    this._mapper = mapper
  }

  async execute() {
    const qualityEvaluationEntities = await this._repository.without(/* in the future I will have to specify what kind */)
    return qualityEvaluationEntities.map(this._mapper.map)
  }
}

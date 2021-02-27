import {Service} from '@s-ui/domain'

export default class GetCVSStatsFilteredEvaluationsService extends Service {
  constructor({repository, filteredEvaluationsValueObjectFactory}) {
    super()
    this._repository = repository
    this._filteredEvaluationsValueObjectFactory = filteredEvaluationsValueObjectFactory
  }

  async execute({filters}) {
    const students = await this._repository.allStudents()
    const stuctures = await this._repository.allStructure()
    const qualities = await this._repository.allQuality()
    const texts = await this._repository.allTexts()

    return this._filteredEvaluationsValueObjectFactory({
      filters,
      students,
      stuctures,
      qualities,
      texts
    })
  }
}

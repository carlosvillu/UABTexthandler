import {streamify} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

@streamify('execute')
class GetCSVStatsFilteredEvaluationsUseCase extends UseCase {
  constructor({service, filtersValueObjectFactory}) {
    super()
    this._service = service
    this._filtersValueObjectFactory = filtersValueObjectFactory
  }

  async execute({filters: filtersJSON}) {
    const filters = this._filtersValueObjectFactory(filtersJSON)
    const evaluations = await this._service.execute({filters})
    return evaluations.toCSV()
  }
}

export default GetCSVStatsFilteredEvaluationsUseCase

import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetStatsStructureEvaluationsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    return this._service.execute()
  }
}

export default GetStatsStructureEvaluationsUseCase

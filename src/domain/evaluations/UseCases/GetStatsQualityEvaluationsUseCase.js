import {streamify} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

@streamify('execute')
class GetStatsQualityEvaluationsUseCase extends UseCase {
  constructor({service} = {}) {
    super()
    this._service = service
  }

  execute() {
    return this._service.execute()
  }
}

export default GetStatsQualityEvaluationsUseCase

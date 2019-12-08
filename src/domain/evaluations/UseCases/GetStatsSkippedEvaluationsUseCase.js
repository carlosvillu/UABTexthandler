import {streamify} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

@streamify('execute')
class GetStatsSkippedEvaluationsUseCase extends UseCase {
  constructor({service}) {
    super()
    this._service = service
  }

  execute() {
    return this._service.execute()
  }
}

export default GetStatsSkippedEvaluationsUseCase

import {Service} from '@s-ui/domain'

export default class SkipEvaluationsService extends Service {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  execute({text, type}) {
    return this._repository.skip({text, type})
  }
}

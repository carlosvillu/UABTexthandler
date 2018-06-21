import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetNextEvaluationTextsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute() {
    const text = await this._service.execute()
    return text.toJSON()
  }
}

export default GetNextEvaluationTextsUseCase

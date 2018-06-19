import {streamify} from '@s-ui/decorators'

@streamify('execute')
class UploadTextsUseCase {
  constructor({service} = {}) {
    this._service = service
  }

  async execute({filename, body}) {
    const text = await this._service.execute({filename, body})
    return text.toJSON()
  }
}

export default UploadTextsUseCase

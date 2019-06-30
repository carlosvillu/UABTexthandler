import {UseCase} from '@s-ui/domain'

export default class UploadPromptTextsUseCase extends UseCase {
  constructor({service, textEntityFactory} = {}) {
    super()
    this._service = service
    this._textEntityFactory = textEntityFactory
  }

  execute({filename, prompt}) {
    return this._service.execute({
      text: this._textEntityFactory({
        idFile: filename,
        prompt
      })
    })
  }
}

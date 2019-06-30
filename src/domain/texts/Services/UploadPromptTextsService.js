import {Service} from '@s-ui/domain'

export default class UploadPromptTextsService extends Service {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  execute({text}) {
    return this._repository.updatePrompt({text})
  }
}

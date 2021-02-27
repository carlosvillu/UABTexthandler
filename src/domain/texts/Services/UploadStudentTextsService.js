import {Service} from '@s-ui/domain'

export default class UploadStudentTextsService extends Service {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  execute({student}) {
    return this._repository.createStudent({student})
  }
}

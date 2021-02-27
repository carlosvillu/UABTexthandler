import {UseCase} from '@s-ui/domain'

export default class UploadStudentTextsUseCase extends UseCase {
  constructor({service, studentEntityFactory}) {
    super()
    this._service = service
    this._studentEntityFactory = studentEntityFactory
  }

  async execute({id}) {
    const student = await this._service.execute({
      student: this._studentEntityFactory({
        id
      })
    })

    return student.toJSON()
  }
}

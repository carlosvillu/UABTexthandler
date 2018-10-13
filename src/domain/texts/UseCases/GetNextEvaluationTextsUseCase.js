import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetNextEvaluationTextsUseCase {
  constructor({service, userEntityFactory} = {}) {
    this._service = service
    this._userEntityFactory = userEntityFactory
  }

  async execute({user} = {}) {
    const userEntity = this._userEntityFactory(user)
    const text = await this._service.execute({user: userEntity})
    return text && text.toJSON()
  }
}

export default GetNextEvaluationTextsUseCase

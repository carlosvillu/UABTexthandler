import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetNextEvaluationTextsUseCase {
  constructor({service, userEntityFactory, levelValueObjectFactory} = {}) {
    this._levelValueObjectFactory = levelValueObjectFactory
    this._service = service
    this._userEntityFactory = userEntityFactory
  }

  async execute({user, grade: level} = {}) {
    const userEntity = this._userEntityFactory(user)
    const levelValueObject = this._levelValueObjectFactory({level})
    const text = await this._service.execute({
      user: userEntity,
      level: levelValueObject
    })
    return text && text.toJSON()
  }
}

export default GetNextEvaluationTextsUseCase

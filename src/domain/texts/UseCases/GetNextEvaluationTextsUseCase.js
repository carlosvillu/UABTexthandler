import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetNextEvaluationTextsUseCase {
  constructor({
    levelValueObjectFactory,
    service,
    typeEvaluationValueObjectFactory,
    userEntityFactory
  } = {}) {
    this._levelValueObjectFactory = levelValueObjectFactory
    this._service = service
    this._typeEvaluationValueObjectFactory = typeEvaluationValueObjectFactory
    this._userEntityFactory = userEntityFactory
  }

  async execute({user, type, grade: level} = {}) {
    const typeEvaluationValueObject = this._typeEvaluationValueObjectFactory({
      type
    })
    const userEntity = this._userEntityFactory(user)
    const levelValueObject = this._levelValueObjectFactory({level})
    const text = await this._service.execute({
      level: levelValueObject,
      type: typeEvaluationValueObject,
      user: userEntity
    })
    return text && text.toJSON()
  }
}

export default GetNextEvaluationTextsUseCase

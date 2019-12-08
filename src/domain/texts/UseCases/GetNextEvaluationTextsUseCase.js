import {streamify} from '@s-ui/decorators'

@streamify('execute')
class GetNextEvaluationTextsUseCase {
  constructor({
    levelValueObjectFactory,
    genreValueObjectFactory,
    service,
    typeEvaluationValueObjectFactory,
    userEntityFactory
  } = {}) {
    this._levelValueObjectFactory = levelValueObjectFactory
    this._genreValueObjectFactory = genreValueObjectFactory
    this._service = service
    this._typeEvaluationValueObjectFactory = typeEvaluationValueObjectFactory
    this._userEntityFactory = userEntityFactory
  }

  async execute({user, type, grade: level, genre} = {}) {
    const typeEvaluationValueObject = this._typeEvaluationValueObjectFactory({
      type
    })
    const userEntity = this._userEntityFactory(user)
    const levelValueObject = this._levelValueObjectFactory({level})
    const genreValueObject = this._genreValueObjectFactory({genre})
    const text = await this._service.execute({
      level: levelValueObject,
      genre: genreValueObject,
      type: typeEvaluationValueObject,
      user: userEntity
    })
    return text && text.toJSON()
  }
}

export default GetNextEvaluationTextsUseCase

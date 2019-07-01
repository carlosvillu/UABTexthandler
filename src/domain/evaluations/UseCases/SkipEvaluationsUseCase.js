import {UseCase} from '@s-ui/domain'

export default class SkipEvaluationsUseCase extends UseCase {
  constructor({
    service,
    textEntityFactory,
    typeEvaluationValueObjectFactory
  } = {}) {
    super()
    this._service = service
    this._textEntityFactory = textEntityFactory
    this._typeEvaluationValueObjectFactory = typeEvaluationValueObjectFactory
  }

  execute({text, type}) {
    return this._service.execute({
      text: this._textEntityFactory(text),
      type: this._typeEvaluationValueObjectFactory({type})
    })
  }
}

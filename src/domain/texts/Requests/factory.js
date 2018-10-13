import TextsErrorsFactory from '../Errors/factory'

import EvaluationTextsRequest from './EvaluationTextsRequest'

export default class TextsRequestsFactory {
  static evaluationTextsRequest = evaluation => {
    EvaluationTextsRequest.validate({
      evaluation,
      evaluationTextsErrorFactory: TextsErrorsFactory.evaluationTextsError
    })
    return new EvaluationTextsRequest(evaluation)
  }
}

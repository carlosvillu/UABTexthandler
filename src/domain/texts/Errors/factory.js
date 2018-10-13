import EvaluationTextsError from './EvaluationTextsError'

export default class TextsErrorsFactory {
  static evaluationTextsError = errors => new EvaluationTextsError(errors)
}

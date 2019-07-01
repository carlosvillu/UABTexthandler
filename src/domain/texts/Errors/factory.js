import EvaluationTextsError from './EvaluationTextsError'
import QualityTextsError from './QualityTextsError'

export default class TextsErrorsFactory {
  static evaluationTextsError = ({errors}) => new EvaluationTextsError({errors})
  static qualityTextsError = () => new QualityTextsError()
}

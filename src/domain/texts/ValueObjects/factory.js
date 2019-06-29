import LevelValueObject from './LevelValueObject'
import QualityValueObject from './QualityValueObject'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

export default class TextsValueObjectsFactory {
  static levelValueObject = ({level}) => new LevelValueObject({level})
  static qualityValueObject = ({quality}) => new QualityValueObject({quality})
  static typeEvaluationValueObject = ({type}) =>
    new TypeEvaluationValueObject({type})
}

import TextsErrorsFactory from '../Errors/factory'

import LevelValueObject from './LevelValueObject'
import GenreValueObject from './GenreValueObject'
import QualityValueObject from './QualityValueObject'
import TextsCollectionValueObject from './TextsCollectionValueObject'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

export default class TextsValueObjectsFactory {
  static levelValueObject = ({level}) => new LevelValueObject({level})
  static genreValueObject = ({genre}) => new GenreValueObject({genre})

  static qualityValueObject = ({quality}) => {
    QualityValueObject.validate({
      quality,
      error: TextsErrorsFactory.qualityTextsError()
    })
    return new QualityValueObject({quality})
  }

  static textsCollectionValueObject = ({texts}) =>
    new TextsCollectionValueObject({texts})

  static typeEvaluationValueObject = ({type}) =>
    new TypeEvaluationValueObject({type})
}

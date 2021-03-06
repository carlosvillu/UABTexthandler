import GenreValueObject from '../texts/ValueObjects/GenreValueObject'
import TypeEvaluationValueObject from '../texts/ValueObjects/TypeEvaluationValueObject'
import TimeValueObject from '../texts/ValueObjects/TimeValueObject'

export default {
  API_HOST: 'localhost:3001',
  GRADES: {
    SECOND_PRIMARY: 2,
    THIRD_PRIMARY: 3,
    FOURTH_PRIMARY: 4,
    FIFTH_PRIMARY: 5,
    SIXTH_PRIMARY: 6,
    SECOND_ESO: 8
  },
  GENRE: {
    OPINION: GenreValueObject.OPINION,
    NARRATIVE: GenreValueObject.NARRATIVE
  },
  TYPE_EVALUATIONS: {
    QUALITY: TypeEvaluationValueObject.QUALITY,
    STRUCTURE: TypeEvaluationValueObject.STRUCTURE
  },
  TIME: {
    PRE: TimeValueObject.PRE,
    POST: TimeValueObject.POST,
    MANT: TimeValueObject.MANT,
    SEG1: TimeValueObject.SEG1,
    SEG2: TimeValueObject.SEG2
  }
}

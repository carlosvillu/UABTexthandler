import ValueObject from '@s-ui/domain/lib/ValueObject'
import TypeEvaluationValueObject from './TypeEvaluationValueObject'

Array.prototype.tap = function(msg) { // eslint-disable-line
  console.log(msg, this)
  return this
}

export default class FilteredEvaluationsValueObject extends ValueObject {
  evaluationsByType() {
    if (this._filters.type() === TypeEvaluationValueObject.QUALITY) {
      return this._qualities
    } else {
      return this._structures
    }
  }

  resultsByType(evaluation) {
    if (!evaluation.id) {
      return {}
    }
    if (this._filters.type() === TypeEvaluationValueObject.QUALITY) {
      return {
        quality: evaluation.quality
      }
    } else {
      const {
        createdAt,
        idFile,
        idUser,
        idText,
        reasons,
        userEmail,
        ...rest
      } = evaluation
      return {
        ...rest,
        ...reasons.reduce((acc, reason, index) => {
          acc[`reason_${index}_justification`] = reason.justification
          return acc
        }, {})
      }
    }
  }

  toCSV() {
    const filteredTexts = this._texts
      .filter(text => text.genre() === this._filters.genre()) // Filter by genre
      .filter(text => text.time() === this._filters.time()) // Filter by Time PRE, POST, MANT ...
      .map(text => text.toJSON()) // From here we are going to work as plain JSON
      // Replace the evaluations object with an array order by `createdAt` file with only the evaluation by type (Qualit or structure)
      .map(text => {
        text.evaluations = Object.keys(text.evaluations[this._filters.type()])
          .map(evaluationID => {
            return this.evaluationsByType()
              .find(evaluation => evaluation.id() === evaluationID)
              .toJSON()
          })
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        return text
      })
      .map(text => {
        text.evaluation = text.evaluations[this._filters.order()] || false
        return text
      })
      .filter(text => text.evaluation)
      .tap()

    const rows = this._students.map(student => {
      const text = filteredTexts.find(
        text => text.idFile.slice(0, 8) === student.studentID()
      ) || {
        idFile: '',
        gender: '',
        time: '',
        evaluation: {userEmail: ''}
      }
      return {
        id: student.studentID(),
        fileID: text.idFile,
        genre: text.gender,
        time: text.time,
        evaluator: text.evaluation.userEmail,
        ...this.resultsByType(text.evaluation)
      }
    })
    return rows
  }
}

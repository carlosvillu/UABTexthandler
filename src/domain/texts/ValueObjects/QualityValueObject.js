import {ValueObject} from '@s-ui/domain'

export default class QualityValueObject extends ValueObject {
  static validate({quality, error}) {
    if (quality === undefined || !Number.isInteger(quality)) {
      throw error
    }
  }
}

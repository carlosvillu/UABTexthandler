import {Mapper} from '@s-ui/domain'

export default class TextsEntityListToStatsTextsWhitoutQualityEvaluation extends Mapper {
  map = textEntity => ({
    idFile: textEntity.idFile()
  })
}

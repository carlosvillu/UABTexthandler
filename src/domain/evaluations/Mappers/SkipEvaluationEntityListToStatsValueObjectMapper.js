import {Mapper} from '@s-ui/domain'

export default class SkipEvaluationEntityListToStatsValueObjectMapper extends Mapper {
  map = skipEvaluationEntity => ({
    idFile: skipEvaluationEntity.idFile(),
    quality: skipEvaluationEntity.quality(),
    structure: skipEvaluationEntity.structure()
  })
}

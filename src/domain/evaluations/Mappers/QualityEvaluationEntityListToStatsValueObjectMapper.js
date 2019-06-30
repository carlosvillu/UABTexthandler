import {Mapper} from '@s-ui/domain'

export default class QualityEvaluationEntityListToStatsValueObjectMapper extends Mapper {
  map = qualityEvaluationEntity => ({
    evaluator: qualityEvaluationEntity.evaluator(),
    idFile: qualityEvaluationEntity.idFile(),
    quality: qualityEvaluationEntity.quality()
  })
}

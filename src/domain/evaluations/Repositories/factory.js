import EvaluationsEntitiesFactory from '../Entities/factory'

import FireBaseEvaluationsRepository from './FireBaseEvaluationsRepository'

export default class EvaluationsRepositoriesFactory {
  static fireBaseEvaluationsRepository = ({config}) =>
    new FireBaseEvaluationsRepository({
      config,

      textEntityFactory: EvaluationsEntitiesFactory.textEntity,

      skipEvaluationEntityFactory:
        EvaluationsEntitiesFactory.skipEvaluationEntity,

      qualityEvaluationEntityFactory:
        EvaluationsEntitiesFactory.qualityEvaluationEntity,

      structureEvaluationEntityFactory:
        EvaluationsEntitiesFactory.structureEvaluationEntity
    })
}

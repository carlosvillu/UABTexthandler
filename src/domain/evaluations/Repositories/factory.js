import EvaluationsEntitiesFactory from '../Entities/factory'

import FireBaseEvaluationsRepository from './FireBaseEvaluationsRepository'

export default class EvaluationsRepositoriesFactory {
  static fireBaseEvaluationsRepository = ({config}) =>
    new FireBaseEvaluationsRepository({
      config,
      evaluationsEntityFactory: EvaluationsEntitiesFactory.evaluationEntity
    })
}

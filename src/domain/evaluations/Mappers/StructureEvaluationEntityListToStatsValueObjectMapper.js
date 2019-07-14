export default class StructureEvaluationEntityListToStatsValueObjectMapper {
  constructor({structureStatsValueObjectFactory}) {
    this._structureStatsValueObjectFactory = structureStatsValueObjectFactory
  }
  map = evaluations => {
    const stats = evaluations.map(evaluation => {
      const stat = {
        evaluator: evaluation.evaluator(),
        idFile: evaluation.idFile(),
        introduction: evaluation.introduction(),
        thesis: evaluation.opinion(),
        reasons: evaluation.numberOfPositiveReasons(),
        expEvidence: evaluation.numberOfExpEvidencie(),
        expExample: evaluation.numberOfExpExample(),
        expExpert: evaluation.numberOfExpExpert(),
        expExpansion: evaluation.numberOfExpOther(),
        endConclusion: evaluation.endConclusion(),
        endTypeConclusion: evaluation.endTypeConclusion(),
        connThesis: evaluation.opinionConnector(),
        connReasons: evaluation.reasonConnectors(),
        connExplanations: evaluation.reasonExplication(),
        connEnd: evaluation.conclusion()
      }

      return stat
    })

    return stats
  }
}

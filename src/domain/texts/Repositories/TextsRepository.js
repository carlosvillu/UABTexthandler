export default class TextsRepository {
  all() {
    throw Error('[TextsRepository#all] must be implemented')
  }

  upload() {
    throw Error('[TextsRepository#upload] must be implemented')
  }

  next() {
    throw Error('[TextsRepository#next] must be implemented')
  }

  saveEvaluationStructure() {
    throw Error('[TextsRepository#saveEvaluationStructure] must be implemented')
  }

  saveEvaluationQuality() {
    throw Error('[TextsRepository#saveEvaluationQuality] must be implemented')
  }

  updatePrompt() {
    throw Error('[TextsRepository#updatePromp] must be implemented')
  }

  createStudent() {
    throw Error('[TextsRepository#createStudent] must be implemented')
  }
}

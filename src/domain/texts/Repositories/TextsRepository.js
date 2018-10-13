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

  saveEvaluation() {
    throw Error('[TextsRepository#saveEvaluation] must be implemented')
  }
}

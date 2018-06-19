import TextEntity from './TextEntity'

export default class TextsEntitiesFactory {
  static textEntity = ({
    id,
    idText,
    school,
    level,
    room,
    student,
    original,
    normalize,
    gender,
    time,
    evaluations,
    createdAt
  }) =>
    new TextEntity({
      id,
      idText,
      school,
      level,
      room,
      student,
      original,
      normalize,
      gender,
      time,
      evaluations,
      createdAt
    })
}

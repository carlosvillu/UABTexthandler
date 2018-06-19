export default class JSONTextToTextEntityTextsMapper {
  constructor({textEntityFactory} = {}) {
    this._textEntityFactory = textEntityFactory
  }
  map = ({filename, body}) => {
    const [, school, level, room, student, time, gender] = filename.match(
      /^(\d\d)(\d)(\d)(\d\d\d\d)(PRE|POST|MANT|S1|S2)-(OP|NA)/
    )
    return this._textEntityFactory({
      idText: parseInt(`${school}${level}${room}${student}`, 10),
      school: parseInt(school, 10),
      level: parseInt(level, 10),
      room: parseInt(room, 10),
      student: parseInt(student, 10),
      original: body,
      normalize: body,
      gender,
      time,
      evaluations: {}
    })
  }
}

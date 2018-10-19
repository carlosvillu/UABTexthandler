export default class JSONTextToTextEntityTextsMapper {
  constructor({textEntityFactory, normalizeMapper} = {}) {
    this._textEntityFactory = textEntityFactory
    this._normalizeMapper = normalizeMapper
  }
  map = ({filename, body}) => {
    const [idFile] = filename.split('.')
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
      normalize: this._normalizeMapper.map(body),
      gender,
      time,
      idFile,
      evaluations: {}
    })
  }
}

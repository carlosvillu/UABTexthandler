export default class JSONTextToTextEntityTextsMapper {
  constructor({textEntityFactory, normalizeMapper}) {
    this._textEntityFactory = textEntityFactory
    this._normalizeMapper = normalizeMapper
  }

  applyTimeToLevel({value, time}) {
    const [_, delta = 0] = time.split(/SEG/)
    return parseInt(value, 10) + parseInt(delta, 10)
  }

  map = ({filename, body}) => {
    const [idFile] = filename.split('.')
    const [, school, level, room, student, time, gender] = filename.match(
      /^(\d\d)(\d)(\d)(\d\d\d\d)(PRE|POST|MANT|SEG1|SEG2)-(OP|NA)/i
    )
    return this._textEntityFactory({
      idText: parseInt(`${school}${level}${room}${student}`, 10),
      school: parseInt(school, 10),
      level: this.applyTimeToLevel({value: level, time}),
      room: parseInt(room, 10),
      student: parseInt(student, 10),
      original: body,
      normalize: this._normalizeMapper.map(body),
      time: time.toUpperCase(),
      idFile: idFile.toUpperCase(),
      gender: gender.toUpperCase(),
      evaluations: {},
      prompt: ''
    })
  }
}

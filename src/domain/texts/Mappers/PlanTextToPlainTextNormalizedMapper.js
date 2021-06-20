const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

export default class PlanTextToPlainTextNormalizedMapper {
  removeOccurencesSquareBrackets(src) {
    return src.replace(/\[.*\]/g, '')
  }

  removeAtO(src) {
    return src.replace(/@o/g, '')
  }

  removeAtH(src) {
    return src.replace(/@h/g, '')
  }

  removeAtS(src) {
    return src.replace(/@s(:\w+)?/g, '')
  }

  replaceSpaceDotNewLine(src) {
    return src.replace(/\s\.\n/g, ' ')
  }

  replaceQuestionMark(src) {
    return src.replace(/\[% interrogació\]/g, '?')
  }

  replaceExclamationMark(src) {
    return src.replace(/\[% exclamació\]/g, '!')
  }

  replaceEllipsis(src) {
    return src.replace(/\[% suspensius\]/g, '...')
  }

  replacePeriodAndNewLine(src) {
    return src.replace(/\s\[% punt AP\]\s?/g, '.\n\n')
  }

  replacePeriod(src) {
    return src.replace(/\s\[% AP\]\s?/g, '\n\n')
  }

  map = (text, corpusAnalytics) => {
    const normalizeText = pipe
      .apply(
        undefined,
        [
          corpusAnalytics && this.removeOccurencesSquareBrackets,
          this.removeAtO,
          this.removeAtH,
          this.removeAtS,
          this.replaceSpaceDotNewLine,
          this.replaceQuestionMark,
          this.replaceExclamationMark,
          this.replaceEllipsis,
          this.replacePeriodAndNewLine,
          this.replacePeriod
        ].filter(Boolean)
      )(text)
      .trim()
    return normalizeText
  }
}

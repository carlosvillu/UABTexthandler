import I18n from '@s-ui/i18n'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'

import esES from './es-ES'
import esCA from './es-CA'
import enGB from './en-GB'

const i18n = new I18n({ adapter: new Polyglot() })
i18n.languages = {
  'es-ES': esES,
  'es-CA': esCA,
  'en-GB': enGB
}

export default ({ lang }) => {
  i18n.culture = lang
  return i18n
}

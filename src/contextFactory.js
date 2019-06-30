import i18nFactory from './literals'
import domain from './domain/instance'
export default async () => ({domain, i18n: i18nFactory({lang: 'es-CA'})})

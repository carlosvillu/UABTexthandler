import {original, normalize as result} from '../fixtures/texts/normalize'
import {expect} from 'chai'
import Domain from '../../src/domain'

let domain
describe('Normalize Corpus TexCorpus Text', () => {
  beforeEach(() => {
    domain = new Domain()
  })

  afterEach(() => {
    domain = null
  })

  it('Remove any ocurrencies of [WHAT_EVER] in the text', async function() {
    const input = 'perquè@h los@s nens [% CULO] juguin@h un poc@h [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input, corpusAnalytics: true})
    return expect(normalized.indexOf('[% CULO]')).to.equal(-1)
  })
})

describe('Normalize rules', () => {
  beforeEach(() => {
    domain = new Domain()
  })

  it('Should remove all @o ocurrencies', async () => {
    const input = 'perquè@o los@s nens juguin@o un poc@o [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    return expect(normalized.indexOf('@o')).to.equal(-1)
  })

  it('Should remove all @h ocurrencies', async () => {
    const input = 'perquè@h los@s nens juguin@h un poc@h [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    return expect(normalized.indexOf('@o')).to.equal(-1)
  })

  it('Should remove all @s ocurrencies', async () => {
    const input = 'perquè@o los@s nens juguin@o un poc@o [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized.indexOf('@s')).to.equal(-1)
  })

  it('Should remove all @s:[LANGUAGE] ocurrencies', async () => {
    const input = 'perquè@o los@s:CAT nens juguin@s:ESP un poc@o [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized.indexOf(':CATALAN')).to.equal(-1)
    expect(normalized.indexOf(':ESPAÑOL')).to.equal(-1)
  })

  it('Should remove all @o@s ocurrencies', async () => {
    const input =
      'perquè@o@s los@s:CAT nens juguin@s:ESP un poc@o@s [% punt AP] .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized.indexOf(':CATALAN')).to.equal(-1)
    expect(normalized.indexOf(':ESPAÑOL')).to.equal(-1)
    expect(normalized.indexOf('@o')).to.equal(-1)
    expect(normalized.indexOf('@s')).to.equal(-1)
    expect(normalized.indexOf('@o@s')).to.equal(-1)
  })

  it('Should replace all [% interrogació] ocurrencies with "? "', async () => {
    const input = 'perquè los nens [% interrogació] juguin un poc .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized).to.be.eql('perquè los nens ? juguin un poc .')
  })

  it('Should replace all [% exclamació] ocurrencies with "! "', async () => {
    const input =
      'perquè los nens [% exclamació] juguin [% exclamació] un poc .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized).to.be.eql('perquè los nens ! juguin ! un poc .')
  })

  it('Should replace all [% suspensius] ocurrencies with "... "', async () => {
    const input =
      'perquè los nens [% suspensius] juguin [% suspensius] un poc .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized).to.be.eql('perquè los nens ... juguin ... un poc .')
  })

  it('Should replace all [% punt AP] ocurrencies with ".\\n\\n"', async () => {
    const input = 'perquè los nens [% punt AP] juguin [% punt AP] un poc .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized).to.be.eql('perquè los nens.\n\njuguin.\n\nun poc .')
  })

  it('Should replace all [% AP] ocurrencies with "\\n\\n"', async () => {
    const input = 'perquè los nens [% AP] juguin [% AP] un poc .'
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: input})
    expect(normalized).to.be.eql('perquè los nens\n\njuguin\n\nun poc .')
  })
})
describe('Normalize texts', () => {
  beforeEach(() => {
    domain = new Domain()
  })

  it('Should have a normalized text with all rules apply', async () => {
    const normalized = await domain
      .get('normalize_texts_use_case')
      .execute({text: original})
    expect(normalized).to.be.eql(result)
  })
})

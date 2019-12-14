#!/usr/bin/env node
/* eslint no-console:0 */

const CSVToJSON = (data, delimiter = ';') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter)
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter)
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj), // eslint-disable-line
        {}
      )
    })
}

const program = require('commander')
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const fg = require('fast-glob')

program
  .option('--dry', 'Dont copy anything just output moves')
  .option('--csv <csv>', 'CSV file, mandatory an id and "1st rater" fields')
  .option('--texts <texts>', 'Folder with all texts')
  .option(
    '--filter-filename <filterFilename>',
    'Only file names that match with this pattern'
  )
  .on('--help', () => {
    console.log('  Description:')
    console.log('')
    console.log('   Split texts using a CSV')
    console.log('')
    console.log('  Examples:')
    console.log('')
    console.log('    $ super-texthandler split-texts')
    console.log('')
  })
  .parse(process.argv)

const CSV_PATH = path.resolve(program.csv)
const TEXTS_FOLDER_PATH = path.resolve(program.texts)
const TEXTS_FOLDER_NAME = path.basename(TEXTS_FOLDER_PATH).toLowerCase()
;(async () => {
  let files = await fg([path.join(TEXTS_FOLDER_PATH, '*')])
  if (program.filterFilename) {
    files = files.filter(file => file.match(program.filterFilename))
  }
  files = files.map(file => file.toLowerCase())

  console.log(files)

  const data = fs
    .readFileSync(CSV_PATH, {encoding: 'utf-8'})
    .replace(/\r/g, '\n')
  const csv = CSVToJSON(data).filter(row => Boolean(row['1st rater']))

  csv.forEach(async entry => {
    const SRC = files.find(file => file.match(entry.idFile.toLowerCase()))
    const DEST = SRC.replace(
      TEXTS_FOLDER_NAME,
      entry['1st rater'].replace(/\s/g, '').toLowerCase()
    )
    const DEST_DIRNAME = path.dirname(DEST)

    !program.dry &&
      !fs.existsSync(DEST_DIRNAME) &&
      fs.mkdirSync(DEST_DIRNAME, {recursive: true})
    !program.dry && (await fse.copy(SRC, DEST))
    console.log(`${SRC} -> ${DEST}`)
  })
})()

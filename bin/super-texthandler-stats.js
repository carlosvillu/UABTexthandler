#!/usr/bin/env node
/* eslint no-console:0 */

const program = require('commander')

program
  .option('-D, --debug', 'Show extra metrics')
  .option('-P, --path <path>', 'Where is the full DB JSON file')
  .option('-T, --type <type>', 'Type os evaluation "structure" or "quality"')
  .option('-L, --level', 'Split by level')
  .on('--help', () => {
    console.log('  Description:')
    console.log('')
    console.log(
      ' Run this command to get a table with stats about the current state of the evaluations in the platform'
    )
    console.log(
      ' You will get Number of texts in the platform, number of texts with zero, one or two evaluations'
    )
    console.log('')
    console.log('  Examples:')
    console.log('')
    console.log(
      '    $ super-texthandler stats -P /path/to/backup_DB.json -T quality'
    )
    console.log('')
  })
  .parse(process.argv)

const {type, path, debug, level: splitByLevel} = program

if (!['structure', 'quality'].includes(type)) {
  console.error(`Type ${type} not allowed. Use "structure" or "quality"`)
  process.exit(1)
}

const db = require(path)

const texts = db.texts

const stats = Object.values(texts).reduce((acc, text) => {
  let id = text.idFile.slice(8).trim()
  const level = text.level
  if (splitByLevel) {
    id = `${id}__${level}`
  }
  const evaluations = text.evaluations || {}
  const numberOfEvaluationsByType = Object.keys(evaluations[type] || {}).length
  acc[id] = acc[id] || {total: 0, counts: [0, 0, 0, 0, 0, 0, 0]} // Sadly there are texts with more than 2 evaluations. But this is taken into account in the platform

  if (numberOfEvaluationsByType > 2) {
    debug && console.log(text.idFile, numberOfEvaluationsByType)
  }

  acc[id].total = acc[id].total + 1
  acc[id].counts[numberOfEvaluationsByType] += 1
  return acc
}, {})

console.log(stats)

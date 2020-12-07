#!/usr/bin/env node
/* eslint no-console:0 */

const program = require('commander')
const fs = require('fs')

program
  .option('-O, --stdout', 'Print CSV in StdOut')
  .option('-P, --path <path>', 'Where is the full CSV file')
  .option('-T, --type <type>', 'Type os evaluation "structure" or "quality"')
  .option(
    '-S, --separator <separator>',
    'Type os evaluation "structure" or "quality"',
    ','
  )
  .on('--help', () => {
    console.log('  Description:')
    console.log('')
    console.log(
      ' Run this command passing the path of a CSV for a type of eveluation and flatten the csv'
    )
    console.log('')
    console.log('  Examples:')
    console.log('')
    console.log(
      '    $ super-texthandler flatten -O -P /path/to/data.csv - S ";" > /tmp/output.csv'
    )
    console.log('')
  })
  .parse(process.argv)

const CSVToJSON = (data, delimiter = program.separator) => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter)
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter)
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index].replace(/\"/g, '')), obj), // eslint-disable-line
        {}
      )
    })
}

const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  )

/*!
 * Add items to an object at a specific path
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}       obj  The object
 * @param  {String|Array} path The path to assign the value to
 * @param  {*}            val  The value to assign
 */
var put = function(obj, path, val) {
  /**
   * If the path is a string, convert it to an array
   * @param  {String|Array} path The path
   * @return {Array}             The path array
   */
  var stringToPath = function(path) {
    // If the path isn't a string, return it
    if (typeof path !== 'string') return path

    // Create new array
    var output = []

    // Split to an array with dot notation
    path.split('.').forEach(function(item, index) {
      // Split to an array with bracket notation
      item.split(/\[([^}]+)\]/g).forEach(function(key) {
        // Push to the new array
        if (key.length > 0) {
          output.push(key)
        }
      })
    })

    return output
  }

  // Convert the path to an array if not already
  path = stringToPath(path)

  // Cache the path length and current spot in the object
  var length = path.length
  var current = obj

  // Loop through the path
  path.forEach(function(key, index) {
    // Check if the assigned key shoul be an array
    var isArray = key.slice(-2) === '[]'

    // If so, get the true key name by removing the trailing []
    key = isArray ? key.slice(0, -2) : key

    // If the key should be an array and isn't, create an array
    if (
      isArray &&
      Object.prototype.toString.call(current[key]) !== '[object Array]'
    ) {
      current[key] = []
    }

    // If this is the last item in the loop, assign the value
    if (index === length - 1) {
      // If it's an array, push the value
      // Otherwise, assign it
      if (isArray) {
        current[key].push(val)
      } else {
        current[key] = val
      }
    }

    // Otherwise, update the current place in the object
    else {
      // If the key doesn't exist, create it
      if (!current[key]) {
        current[key] = {}
      }

      // Update the current place in the object
      current = current[key]
    }
  })
}

const {type, path: csvPath} = program

if (!fs.existsSync(csvPath)) {
  console.error('CSV is required')
  process.exit(1)
}
if (!['structure', 'quality'].some(t => t === type)) {
  console.error('Only structure or quality are valid')
  process.exit(1)
}

const csvBody = fs.readFileSync(csvPath, 'utf8').replace(/\r/g, '')
const fromIDFileToID = IDFile => IDFile.slice(0, 8)
const fromIDFileToGenre = IDFile => IDFile.split('-')[1].replace(/\s/g, '')
const fromIDFileToTime = IDFile => IDFile.match(/POST|PRE|MANT/)[0]
const fromEvaluatorToHash = evaluator => {
  let [user] = evaluator.split('@')
  user = user.replace(/\./g, '')
  // "marta.fernandezbar@e-campus.uab.cat" => marbar
  return [user.slice(0, 3), user.slice(user.length - 3, user.length)].join('')
}
const dataset = CSVToJSON(csvBody).filter(entry => entry.idFile)

const __keys = {}

const output = dataset
  .map(entry => {
    return {
      ...entry,
      __hash: fromEvaluatorToHash(entry.evaluator),
      __id: fromIDFileToID(entry.idFile),
      __genre: fromIDFileToGenre(entry.idFile),
      __time: fromIDFileToTime(entry.idFile)
    }
  })
  .reduce((acc, entry) => {
    const {evaluator, idFile, __hash, __id, __genre, __time, ...rest} = entry
    const columns = Object.keys(rest).sort()
    columns.forEach(column => {
      put(__keys, `hashes.${__hash}`, true)
      put(__keys, `ids.${__id}`, true)
      put(__keys, `genres.${__genre}`, true)
      put(__keys, `times.${__time}`, true)
      put(__keys, `columns.${column}`, true)

      put(acc, `${__id}.${__hash}.${__time}.${__genre}.${column}`, rest[column])
    })
    return acc
  }, {})

const fromKeysToHeader = keys => {
  const hashes = Object.keys(__keys.hashes).sort()
  const genres = Object.keys(__keys.genres).sort()
  const times = Object.keys(__keys.times).sort()
  const columns = Object.keys(__keys.columns).sort()

  let header = 'id'
  hashes.forEach(hash =>
    times.forEach(time =>
      genres.forEach(genre =>
        columns.forEach(column => {
          header += program.separator + [hash, time, genre, column].join('.')
          return header
        })
      )
    )
  )
  return header
}

const header = fromKeysToHeader(__keys)
const paths = header.split(program.separator).slice(1) // remove 'id'
const file = Object.keys(__keys.ids)
  .sort()
  .reduce((csv, id) => {
    const child = output[id]
    const line = id + program.separator + get.apply(get, [child].concat(paths)).join(program.separator) + '\n' // eslint-disable-line
    csv += line
    return csv
  }, header + '\n')

// console.log(JSON.stringify(output, null, 2))
// console.log(JSON.stringify(__keys, null, 2))

program.stdout && console.log(file)

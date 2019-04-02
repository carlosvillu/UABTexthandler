#!/usr/bin/env node
/* eslint no-console:0 */
// require = require('esm')(module) // eslint-disable-line
require('@babel/register')({
  ignore: [],
  presets: [require.resolve('babel-preset-sui')],
  plugins: [
    require.resolve('babel-plugin-dynamic-import-node'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-transform-modules-commonjs')
  ]
})

const program = require('commander')
const path = require('path')
const fs = require('fs')
const fg = require('fast-glob')

const UABTextHandler = require('../src/domain/index.js').default
const domain = new UABTextHandler()

program
  .option('-C, --clean', 'Remove previous zip')
  .on('--help', () => {
    console.log('  Description:')
    console.log('')
    console.log(
      '   Run this command inside a folder and will generate a normalize version of each text'
    )
    console.log('')
    console.log('  Examples:')
    console.log('')
    console.log('    $ super-texthandler normalize')
    console.log('')
  })
  .parse(process.argv)

const [dir = '.'] = program.args
;(async () => {
  let files = await fg([path.join(path.resolve(dir), '*.txt')])
  const textsNormalizes = await Promise.all(
    files
      .map(path => fs.readFileSync(path, 'utf-8'))
      .map(text => domain.get('normalize_texts_use_case').execute({text}))
  )

  textsNormalizes.forEach(
    (text, index) =>
      console.log('Generate', 'NOR_' + path.basename(files[index])) ||
      fs.writeFileSync(
        path.join(path.resolve(dir), 'NOR_' + path.basename(files[index])),
        text,
        'utf-8'
      )
  )
})()

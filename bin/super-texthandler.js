#!/usr/bin/env node

const program = require('commander')

const pkg = require('../package.json')
const version = pkg.version

program.version(version, '    --version')

program.command('normalize <dir>', 'normalize a folder with texts').alias('b')

program.parse(process.argv)

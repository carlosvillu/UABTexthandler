import base from './base'
import development from './development'
import test from './test'
import production from './production'
import preproduction from './preproduction'

console.log('\n\nENV:', process.env.NODE_ENV, '\n\n')

const envConfig = {
  development: development,
  preproduction: preproduction,
  production: production,
  test: test
}

export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor() {
    this._config = {
      ...base,
      ...envConfig[process.env.NODE_ENV]
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    this._config[key] = value
    return this
  }
}

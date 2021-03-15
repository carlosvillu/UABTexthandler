import {chunk} from './array'

// https://stackoverflow.com/a/37579083
export const series = function series(providers) {
  const ret = Promise.resolve(null)
  const results = []

  return providers
    .reduce(function(result, provider, index) {
      return result.then(function() {
        return provider().then(function(val) {
          results[index] = val
        })
      })
    }, ret)
    .then(function() {
      return results
    })
}

/**
 * @param {Array<string>} arr
 * @param {number} num=50
 * @param {(line: string, index: number) => string} mapFn
 * */
export const executeInChunks = (arr, num = 50, mapFn) => {
  const tasks = chunk(arr, num)
  return series(
    tasks.map(prompts => {
      return () =>
        Promise.all(
          prompts.map((item, index) => {
            return mapFn(item, index)
          })
        )
    })
  )
}

/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
function add (varArgs) {
  // Utilize the 'arguments' object here, not the 'varArgs' parameter.
  // Second try using spread operator.
  let result = [...arguments].reduce((acc, val) => {
    return acc.concat(val)
  }, [])
    .map(val => {
      if (typeof val === 'string') {
        return parseFloat(val.replace(',', '.'))
      } else {
        return val
      }
    }, [])

  if (result.some(val => isNaN(val) || typeof val === 'boolean')) {
    throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
  }

  return result.reduce((acc, val) => acc + val, 0)

  // First try - Very messy
  // if (arguments.length === 0) {
  //   return 0
  // }
  // let args = Array.prototype.slice.call(arguments).reduce((acc, val) => {
  //   if (typeof val === 'number') {
  //     return acc + val
  //   } else if (typeof val === 'string') {
  //     let res = parseFloat(val.replace(',', '.'))
  //     if (isNaN(res)) { throw new TypeError(`At least one of the arguments can't be parsed as a number.`) }
  //     return acc + parseFloat(val.replace(',', '.'))
  //   } else if (Array.isArray(val)) {
  //     return acc + val.reduce((acc1, val1) => acc1 + val1)
  //   } else if (typeof val === 'boolean') {
  //     throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
  //   }
  // }, 0)
  // // TODO: Write your code here.
  // return args
}

exports.add = add

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
  // 1. get the arguments, 2.sort them after parsing need and 3.return the sum of all.
  // console.log('\nNr of arguments: ' + arguments.length + '\n')
  if (arguments.length === 0) {
    return 0
  }
  let args = Array.prototype.slice.call(arguments).reduce((acc, val) => {
    if (typeof val === 'number') {
      return acc + val
    } else if (typeof val === 'string') {
      let res = parseFloat(val.replace(',', '.'))
      if (isNaN(res)) { throw new TypeError(`At least one of the arguments can't be parsed as a number.`) }
      return acc + parseFloat(val.replace(',', '.'))
    } else if (Array.isArray(val)) {
      return acc + val.reduce((acc1, val1) => acc1 + val1)
    } else if (typeof val === 'boolean') {
      throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
    }
  }, 0)
  // args.reduce((acc, val, index) => { return acc + val })
  // TODO: Write your code here.
  return args
}

exports.add = add

/**
 * my-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of all object's numbers.
 *
 * @param {Object[]} source - An array of objects to analyze.
 * @param {number} source[].nr - The number.
 * @returns {number} - The total sum of the nr property of the objects in the provided array.
 */
function getSum (source) {
  // TODO: Write your code here!
  if (!Array.isArray(source)) {
    throw new TypeError('Argument is not of type Array.')
  }
  let _Arr = source.slice(0)
  return _Arr.reduce((acc, val) => {
    return acc + val.nr
  }, 0)
}

// Exports
exports.getSum = getSum

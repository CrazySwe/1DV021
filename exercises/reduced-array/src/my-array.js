/**
 * my-array module
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} data An array with numbers
 * @returns {number} The total sum of the numbers in the array.
*/
function getSum (data) {
  // TODO: Write your code here.
  if (!Array.isArray(data)) {
    throw new TypeError('data is not Array.')
  }
  let cpy = data.slice(0)
  if (cpy.length === 0) {
    return 0
  } else {
    return cpy.reduce((acc, val) => acc + val)
  }
}

exports.getSum = getSum

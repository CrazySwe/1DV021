/**
 * Harshad module.
 *
 * @module src/harshad
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
* Returns true when the given number is a valid Harshad number.
*
* @param {number} number The given number.
* @returns {boolean}
*/
function isValid (number) {
  // TODO: Write your code here! This is the first function to implement.
  // if (typeof number !== 'number') { throw new TypeError('Argument is not of type number') }
  return number % number
    .toString(10).split('')
    .reduce((acc, val) => acc + parseInt(val), 0) === 0
}

/**
* Gets the next Harshad number after the given number.
*
* @param {number} number The given number.
* @returns {number}
*/
function getNext (number) {
  // TODO: Write your code here! This is the second function to implement.
  // if (typeof number !== 'number') { throw new TypeError('Argument is not of type number') }
  do {
    number++
  } while (!isValid(number))
  return number
}

/**
* Returns a sequence of Harshad numbers, starting after a given number.
*
* @param {number} count The number of consecutive Harshad numbers to return.
* @param {number} [start = 0] The number after which the sequence should start; defaults to 0.
* @returns {number[]}
*/
function getSequence (count, start = 0) {
  // TODO: Write your code here! This is the third function to implement.
  let result = []
  do {
    result.push(start = getNext(start))
  } while (count > result.length)
  return result
}

// Exports
exports.isValid = isValid
exports.getNext = getNext
exports.getSequence = getSequence

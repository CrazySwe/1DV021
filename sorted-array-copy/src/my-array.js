/**
 * My-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a numerically sorted copy of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy of the source array.
 */
function immutableSort (source) {
  // TODO: Write your code here.
  if (Array.isArray(source)) {
    let cpy = source.slice(0)
    // comparefunction source @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
    cpy.sort(function compfunc (a, b) { return a - b })
    return cpy
  } else {
    throw new TypeError('Not an Array.')
  }
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy (descending order) of the source array.
 */
function immutableSortDescending (source) {
  // TODO: Write your code here.
}

exports.immutableSort = immutableSort
exports.immutableSortDescending = immutableSortDescending

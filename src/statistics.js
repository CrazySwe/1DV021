/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author TODO: Write your name here.
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
  validateData(numbers)
  // create my return here by calling my other functions
  // return { maximum: maximum(), mean: mean(), median: median(), minimum: minimum(), mode: mode(), range: range(), standardDeviation: standardDeviation() }
}

/**
 * Returns the maximum value
 *
 * @param {number[]} numbers The set of numbers to get maximum value from.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The maximum value to return.
 */
function getMax (numbers) {
  validateData(numbers)
  return Math.max(...numbers)
}
// function getMean
// function getMedian
// function getMinimum
// function getMode
// function getRange
// function getStandardDeviation

// Error Handling
/**
 * Validates the input data is Array, contains numbers else returns false.
 *
 * @param {number[]} numbers Data to be validated
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {false} Returns 0 if passed
 */
function validateData (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  } else if (!numbers.every(val => typeof val === 'number')) {
    throw new TypeError('The passed array contains not just numbers.')
  } else if (!numbers.length) {
    throw new Error('The passed array contains no elements.')
  }
  return 0
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = getMax
exports.mean = undefined
exports.median = undefined
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined

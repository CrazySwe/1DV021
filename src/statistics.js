/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Kevin Cederholm
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
  return {
    maximum: getMax(numbers),
    mean: getMean(numbers),
    median: getMedian(numbers),
    minimum: getMinimum(numbers),
    mode: getMode(numbers),
    range: getRange(numbers),
    standardDeviation: getStandardDeviation(numbers) 
  }
}

/**
 * Returns the maximum value in an array
 *
 * @param {number[]} numbers The array of numbers to get maximum value from.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The maximum value
 */
function getMax (numbers) {
  validateData(numbers)
  return Math.max(...numbers)
}

/**
 * Returns a mean value of an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The mean value
 */
function getMean (numbers) {
  validateData(numbers)
  return numbers.reduce((acc, val) => acc + val) / numbers.length
}

/**
 * Returns a median value of an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The median value
 */
function getMedian (numbers) {
  validateData(numbers)
  let middle = Math.floor(numbers.length / 2)
  let sorted = numbers.slice(0).sort((a, b) => a - b)
  if (sorted.length % 2) {
    return sorted[middle]
  } else {
    return (sorted[middle - 1] + sorted[middle]) / 2.0
  }
}

/**
 * Returns the minimum value in an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The minimum value
 */
function getMinimum (numbers) {
  validateData(numbers)
  return Math.min(...numbers)
}

/**
 * Returns an array of which numbers occurs the most in an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number[]} Returns an array of number(s) that occurs the most
 */
function getMode (numbers) {
  validateData(numbers)

  if (numbers.length === 1) {
    return [numbers[0]]
  }

  // Sort them first
  let _sorted = numbers.slice(0).sort((a, b) => a - b)
  let result = []
  let count = 1
  let maxcount = 1

  for (let i = 0; i < _sorted.length; i++) {
    if (_sorted[i] === _sorted[(i + 1)]) {
      // if x.value is equal to (x + 1).value then add count since they are sorted
      count++
    } else {
      if (count > maxcount) {
        maxcount = count
        result = [_sorted[i]]
      } else if (count === maxcount) {
        // if some other number has equal counts, then add to array
        result.push(_sorted[i])
      }
      count = 1
    }
  }
  return result
}

/**
 * Returns the range value of an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} Returns a range value
 */
function getRange (numbers) {
  validateData(numbers)
  return (getMax(numbers) - getMinimum(numbers))
}

/**
 * Return the deviatin value of an array
 *
 * @param {number[]} numbers The array of numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} Returns a deviation value
 */
function getStandardDeviation (numbers) {
  validateData(numbers)
  let mean = getMean(numbers)
  let result = numbers.slice(0)
    .map(a => Math.pow(a - mean, 2))
    .reduce((acc, val) => acc + val, 0) / numbers.length
  return Math.sqrt(result)
}

// Error Handling
/**
 * Validates the input data is of type Array and contains only numbers
 *
 * @param {number[]} numbers Data to be validated
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers
 */
function validateData (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  } else if (!numbers.every(val => typeof val === 'number')) {
    throw new TypeError('The passed array contains not just numbers.')
  } else if (!numbers.length) {
    throw new Error('The passed array contains no elements.')
  }
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = getMax
exports.mean = getMean
exports.median = getMedian
exports.minimum = getMinimum
exports.mode = getMode
exports.range = getRange
exports.standardDeviation = getStandardDeviation

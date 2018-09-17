/**
 * Winner module.
 *
 * @module src/winner
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Analyze the array with names and returns an object where the frequency of the name is showing.
 *
 * @param {string[]} source
 * @returns {Object.<string, number>} - The object as example: {mats: 1, john: 3}
 */
function getFrequenciesOfNames (source) {
  // TODO: Write your code here
  if (!Array.isArray(source) || !source.every(val => typeof val === 'string')) {
    throw new TypeError('Argument is not of type Array.')
  }
  return source.map(name => name.toLowerCase()).reduce((acc, val) => {
    isNaN(acc[val]) ? acc[val] = 1 : acc[val]++
    return acc
  }, {})
}

/**
 * Takes an object with names and values and returns the name(s) with the highest count.
 *
 * @param {Object.<string, number>} obj
 * @returns {string[]}
 */
function getMostFrequentNames (obj) {
  // TODO: Write your code here

  let maxVal = Math.max(...Object.values(obj))
  return Object.keys(obj).filter(val => obj[val] === maxVal)
}

/**
 * Sorts an array with strings in ascending order.
 *
 * @param {string[]} source
 * @returns {string[]}
 */
function sortNamesAscending (source) {
  // TODO: Write your code here
}

/**
 * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
 * frequent.
 *
 * @param {string[]} source An array with all the winners.
 * @returns {string[]} An array with the most frequent winners.
 */
function getNamesOfWinners (source) {
  // ---------------------------------------
  // Do not change the code in this function!
  // ---------------------------------------
  let frequencies
  let names

  frequencies = getFrequenciesOfNames(source)
  names = getMostFrequentNames(frequencies)

  return sortNamesAscending(names)
}

// Exports
exports.getFrequenciesOfNames = getFrequenciesOfNames
exports.getMostFrequentNames = getMostFrequentNames
exports.sortNamesAscending = sortNamesAscending
exports.getNamesOfWinners = getNamesOfWinners

/**
 * mf module.
 *
 * @module src/mf
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of two local variables.
 *
 * @returns {number} The result of an arithmetic operation.
 */
function add () {
  let a = 21
  let b = '21'

  // TODO: Write your code here.
  b = parseInt(b)

  return a + b
}

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {string} The string 'I'm going to learn how to program in 9 weeks.'.
 */
function concat () {
  let message = `I'm going to learn how to program in`
  let time = 9
  let weeks = 'weeks.'

  // TODO: Write your code here.
  return message + ' ' + time + ' ' + weeks
}

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {number} The sum of two variables rounded to the nearest integer.
 */
function round () {
  let firstNumber = 12.24
  let secondNumber = 29.27

  // TODO: Write your code here.
  return Math.round(firstNumber + secondNumber)
}

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {number} max An integer greater than zero.
 * @returns {string} A string with comma separated odd values.
 */
function getOddNumbers (max) {
  // TODO: Write your code here.
  // Let string be empty from beginning.
  let str = ''

  // Check if integer is actually 1 or bigger.
  if (max >= 1) {
    // Output the beginning of 1.
    str = '1'
    for (let i = 2; i <= max; i++) {
      if (i % 2) {
        str += ', ' + i
      }
    }
  }
  return str
}

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {string} A greeting according to the time of day.
 */
function greetings () {
  let hour = new Date().getHours()

  // TODO: Write your code here.
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensFor (str) {
  // TODO: Write your code here.
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensWhile (str) {
  // TODO: Write your code here.
}

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} - A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
function getNumberSequence () {
  // TODO: Write your code here.
}

exports.add = add
exports.concat = concat
exports.round = round
exports.getOddNumbers = getOddNumbers
exports.greetings = greetings
exports.replaceHyphensFor = replaceHyphensFor
exports.replaceHyphensWhile = replaceHyphensWhile
exports.getNumberSequence = getNumberSequence

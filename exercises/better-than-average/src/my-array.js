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
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {object[]} students
 * @returns {string[]}
 */
function filterBetterThanAverage (students) {
  // TODO: Write your code here.
  if (!Array.isArray(students)) {
    throw new TypeError('Parameter is not array.')
  }
  let cpy = students.slice(0)

  // Calc average with reduce function
  let average = cpy.reduce((acc, value, index) => {
    acc += value.points
    if (index === cpy.length - 1) {
      return acc / cpy.length
    } else {
      return acc
    }
  }, 0)

  // Filter only those with higher points than average. Then return only the names as strings in array
  return cpy.filter((val) => val.points >= average)
    .map(value => value.name)
}

exports.filterBetterThanAverage = filterBetterThanAverage

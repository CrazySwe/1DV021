/**
 * Shape module.
 *
 * @module src/shape
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string representing a right triangle.
 *
 * @param {number} base The number of characters in the triangle's base.
 * @returns {string} A string of hash characters.
 */
function createRightTriangle (base) {
  // TODO: Write your code here.
  let str = ''
  for (let row = 0; row < base; row++) {
    // foreach column on each row.
    for (let col = 0; col <= row; col++) {
      str += '#'
    }
    str += '\n'
  }
  return str
}

exports.createRightTriangle = createRightTriangle

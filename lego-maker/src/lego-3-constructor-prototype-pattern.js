/**
 * Module for lego part 3.
 *
 * @module src/lego-3-constructor-prototype-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick (x = 2, y = 4, color = 'red') {
  /**
  * @type {number}
  */
  this.x = x

  /**
  * @type {number}
  */
  this.y = y

  /**
  * @type {string}
  */
  this.color = color
}

/**
 * @returns {string} String representing the lego
*/
LegoBrick.prototype.toString = function () {
  let str = ''
  for (let i = 0; i < this.y; i++) {
    (str === '') ? str += '®' : str += '\n®'
    for (let j = 1; j < this.x; j++) {
      str += ' ®'
    }
  }
  return str
}

/**
 * Renders the object in the console
 */
LegoBrick.prototype.render = function () {
  console.log(this.toString())
}

// Exports
module.exports = LegoBrick

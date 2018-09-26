/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
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

  /**
   * Render the object
   */
  this.render = function () { console.log(this.toString()) }

  /**
   * @returns {string} String representing the object
   */
  this.toString = function () {
    let str = ''
    for (let i = 0; i < y; i++) {
      (str === '') ? str += '®' : str += '\n®'
      for (let j = 1; j < x; j++) {
        str += ' ®'
      }
    }
    return str
  }
}

// Exports
module.exports = LegoBrick

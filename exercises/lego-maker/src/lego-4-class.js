/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents a lego brick.
 */
class LegoBrick {
  constructor (x = 2, y = 4, color = 'red') {
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
   * renders the legobrick in the console
   */
  render () {
    console.log(this.toString())
  }
  /**
   * @returns {string} string representing the object
   */
  toString () {
    let str = ''
    for (let i = 0; i < this.y; i++) {
      (str === '') ? str += '®' : str += '\n®'
      for (let j = 1; j < this.x; j++) {
        str += ' ®'
      }
    }
    return str
  }
}

// Exports
module.exports = LegoBrick

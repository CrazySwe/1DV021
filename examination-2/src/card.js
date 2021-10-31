/**
 * Module for card
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

/**
 * Creates a card instance representing a playing card
 *
 * @constructor
 * @param {number|string} val
 * @param {string} suit
 */
function Card (val, suit) {
  /**
   * The value of the card
   *
   * @type {number|string}
   */
  this.value = val
  /**
   * The suit of the card
   *
   * @type {string}
   */
  this.suit = suit
}

/**
 * Returns a string representing the card
 *
 * @returns {string}
 */
Card.prototype.toString = function () {
  return this.value + this.suit
}

// Exports
module.exports = Card

/**
 * Module for card
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const protoCard = {
  /**
   * Renders the card to the console
   */
  render () {
    console.log(this.toString())
  },
  /**
   * @returns {string} Representing the card
   */
  toString () {
    return this.value + this.suit
  }
}

/**
 * Returns an object representing a card
 *
 * @param {string|number} val - The value of the card
 * @param {string} suit - The suit of the card
 * @returns {object} obj - object representing a card
 * @returns {number|string} obj.value - The value of the card
 * @returns {string} obj.suit - The suit of the card
 */
let createCard = function (val, suit) {
  return Object.create(protoCard, {
    value: {
      value: val,
      writable: true,
      enumerable: true,
      configurable: true
    },
    suit: {
      value: suit,
      writable: true,
      enumerable: true,
      configurable: true
    }
  })
}

// Exports
exports.createCard = createCard

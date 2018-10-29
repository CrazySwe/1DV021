/**
 * player.js
 *
 * @author Kevin Cederholm
 * @version 1.0
 */
'use strict'

/**
 * Object representing a player or a dealer
 *
 * @class Player
 */
class Player {
  /**
   * Creates an instance of Player.
   * @param {string} name - The name of the player
   * @constructor
   * @memberof Player
   */
  constructor (name) {
    /**
     * Name of the player
     *
     * @class Player
     * @type {string}
     */
    this.name = name
    /**
     * An array of Card objects
     *
     * @class Player
     * @type {Array}
     */
    this.hand = []
    /**
     * String representing the player and the players cards
     *
     * @class Player
     * @type {function}
     * @return {string} - A string representing the player and players hand of cards
     */
    this.toString = function () {
      let cardStr = this.hand.reduce((str, card) => {
        return str + card.toString() + ' '
      }, '')
      return `${this.name}: ${cardStr}`
    }
  }
}

module.exports = Player

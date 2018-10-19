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
  constructor (name) {
    this.name = name
    this.hand = []
    this.handToString = function () {
      let str = this.hand.reduce((str, card) => {
        return str + card.toString() + ' '
      }, '')
      return str
    }
    // this.done = false
  }
}

module.exports = Player

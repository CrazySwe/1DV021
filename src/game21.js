/**
 * game21.js
 * Handling and playing the card game of 21
 *
 * @author Kevin Cederholm
 * @version 1.0
 */
'use strict'

const Deck = require('./deck.js')
const Player = require('./player.js')

class Game21 {
  constructor (nrPlayers) {
    this.dealer = new Player('Dealer')
    this.deckOfCards = new Deck()
    this.players = []

    for (let i = 0; i < nrPlayers; i++) {
      let newPlayer = new Player(`Player #${i + 1}`)
      newPlayer.hand = [ this.deckOfCards.drawCard() ]
      this.players = [].concat(this.players, newPlayer)
    }
  }

  run () {
    this.players.forEach(player => {
      player.hand = [].concat(player.hand, this.deckOfCards.drawCard())
      console.log(this.handValue(player.hand))
      // Play against dealer here...
    })
  }

  /**
   * Calculates the value of a hand with cards
   *
   * @param {Array} handArr An array of cards
   * @returns {number} the value of the hand
   * @memberof Game21
   */
  handValue (handArr) {
    console.log(`handArr: ${handArr}`)
    let nrAces = 0

    let handValue = handArr.reduce((acc, val) => {
      switch (val.value) {
        case 'A':
          nrAces++
          return acc + 14
        case 'K':
          return acc + 13
        case 'Q':
          return acc + 12
        case 'J':
          return acc + 11
        default:
          return acc + val.value
      }
    }, 0)

    while (handValue > 21 && nrAces > 0) {
      handValue = handValue - 13
      nrAces--
    }
    return handValue
  }
}

module.exports = Game21

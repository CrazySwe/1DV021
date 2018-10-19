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
      console.log(player.hand)
    })
  }
}

module.exports = Game21

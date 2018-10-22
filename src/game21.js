/**
 * game21.js
 * Handling and playing the card game 21
 *
 * @author Kevin Cederholm
 * @version 1.0
 */
'use strict'

const Deck = require('./deck.js')
const Player = require('./player.js')

/**
 *
 * @param {number} nrPlayers How many players to play in the game
 * @class Game21
 */
class Game21 {
  constructor (nrPlayers) {
    this.dealer = new Player('Dealer')
    this.deckOfCards = new Deck()
    this.players = []

    for (let i = 0; i < nrPlayers; i++) {
      let newPlayer = new Player(`Player #${i + 1}`)
      newPlayer.hand = [this.deckOfCards.drawCard()]
      this.players = [...this.players, newPlayer]
    }
  }

  /**
   * Main method to start the game
   * Runs until all players have played
   *
   * @memberof Game21
   */
  run () {
    this.players.forEach(player => {
      // First play player
      player.hand = this.playerTurn(player.hand)
      let playerHandValue = this.handValue(player.hand)
      let dealerHandValue = 0

      let dealerStr = ''
      let playerStr = `${player.toString()}(${playerHandValue})`
      if (playerHandValue > 21) { playerStr += ' BUSTED!' }

      if (playerHandValue < 21 && player.hand.length !== 5) {
        // Play dealer
        this.dealer.hand = this.playerTurn(this.dealer.hand)
        dealerHandValue = this.handValue(this.dealer.hand)
        dealerStr += `${this.dealer.toString()}(${dealerHandValue})`
        dealerHandValue > 21 && (dealerStr += ' BUSTED!')
      } else {
        dealerStr += `${this.dealer.name}: -`
      }

      // output results
      console.log(playerStr)
      console.log(dealerStr)
      if ((playerHandValue > 21 || playerHandValue <= dealerHandValue) && dealerHandValue <= 21) {
        console.log(`${this.dealer.name} wins!\n`)
      } else {
        console.log(`${player.name} wins!\n`)
      }

      // clean up for next player
      this.deckOfCards.usedCards = [...this.deckOfCards.usedCards, ...player.hand, ...this.dealer.hand]
      player.hand = []
      this.dealer.hand = []
    })
  }

  playerTurn (playerHand) {
    let handValue = 0
    do {
      playerHand = [...playerHand, this.deckOfCards.drawCard()]
      handValue = this.handValue(playerHand)
      if (handValue >= 15) {
        break
      }
    } while (playerHand.length < 5)
    return playerHand
  }

  /**
   * Calculates the value of a hand with cards
   *
   * @param {Array} handArr An array of cards
   * @returns {number} the value of the hand
   * @memberof Game21
   */
  handValue (handArr) {
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

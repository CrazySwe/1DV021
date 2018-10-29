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
 * Class handling the logic of card game 21
 *
 * @class Game21
 */
class Game21 {
  /**
   * Creates an instance of Game21 with players
   *
   * @param {number} nrPlayers - The amount of players playing
   * @constructor
   * @memberof Game21
   */
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
   * Start and play a game of simulated 21
   *
   * @param {number} playerStop - The value the player should be satisfied
   * @param {number} dealerStop - The value the dealer should be satisfied
   * @memberof Game21
   * @type {function}
   */
  run (playerStop, dealerStop) {
    this.players.forEach(player => {
      player.hand = this.playerTurn(player.hand, playerStop)
      let playerHandValue = this.getHandValue(player.hand)
      let dealerHandValue = 0

      let dealerStr = ''
      let playerStr = `${player.toString()}(${playerHandValue})`
      if (playerHandValue > 21) { playerStr += ' BUSTED!' }

      if (playerHandValue < 21 && player.hand.length !== 5) {
        this.dealer.hand = this.playerTurn(this.dealer.hand, dealerStop)
        dealerHandValue = this.getHandValue(this.dealer.hand)
        dealerStr += `${this.dealer.toString()}(${dealerHandValue})`
        dealerHandValue > 21 && (dealerStr += ' BUSTED!')
      } else {
        dealerStr += `${this.dealer.name}: -`
      }

      console.log(playerStr)
      console.log(dealerStr)
      if ((playerHandValue > 21 || playerHandValue <= dealerHandValue) && dealerHandValue <= 21) {
        console.log(`${this.dealer.name} wins!\n`)
      } else {
        console.log(`${player.name} wins!\n`)
      }

      this.deckOfCards.usedCards = [...this.deckOfCards.usedCards, ...player.hand, ...this.dealer.hand]
      player.hand = []
      this.dealer.hand = []
    })
  }
  /**
   * Players turn to draw cards and play
   *
   * @param {array} playerHand - The hand of the player
   * @param {number} stopAt - The value to stop drawing cards
   * @returns {array} - Array containing the cards the players is satisfied with
   * @memberof Game21
   */
  playerTurn (playerHand, stopAt = 15) {
    let handValue = 0
    do {
      playerHand = [...playerHand, this.deckOfCards.drawCard()]
      handValue = this.getHandValue(playerHand)
      if (handValue >= stopAt) {
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
  getHandValue (handArr) {
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

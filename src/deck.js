/**
 * Module for a deck of cards
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Card = require('./card.js')

/**
 * Represents a deck of 52 cards.
 *
 * @class Deck
 */
class Deck {
  constructor () {
    this.cards = this.createNewDeck()
    this.shuffle()
    this.usedCards = []
  }

  /**
   * Returns an array with Card objects that represents a deck of 52 cards
   *
   * @returns {Array} of cards
   * @memberof Deck
   */
  createNewDeck () {
    let suits = ['♥', '♠', '♣', '♦']
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    let newDeck = []
    suits.forEach(suit => {
      values.forEach(val => {
        newDeck.push(Card.createCard(val, suit))
      })
    })
    return newDeck
  }

  /**
   * Method to shuffle the deck of cards
   *
   * @memberof Deck
   */
  shuffle () {
    // Fisher-Yates shuffle
    let index = 0
    let tmp
    for (let i = this.cards.length - 1; i > 0; i--) {
      index = Math.floor(Math.random() * i)
      tmp = this.cards[i]
      this.cards[i] = this.cards[index]
      this.cards[index] = tmp
    }
  }

  /**
   * Draws a card from this.cards if atleast 2 cards left,
   * else it will concat the used cards and reshuffle before drawing a card.
   *
   * @returns {Object} Returns a Card object
   * @memberof Deck
   */
  drawCard () {
    if (this.cards.length > 1) {
      return this.cards.pop()
    } else {
      this.cards = [].concat(this.cards, this.usedCards)
      this.usedCards = []
      this.shuffle()
      return this.cards.pop()
    }
  }

  /**
   * Method to return a string that represent the deck of cards
   *
   * @returns {string} String representing the deck of cards
   * @memberof Deck
   */
  toString () {
    let str = ''
    this.cards.forEach(card => { str += card.toString() + ' ' })
    return str
  }
}

module.exports = Deck

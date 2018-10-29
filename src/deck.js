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
  /**
   * Creates an instance of Deck.
   * @memberof Deck
   */
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
        newDeck.push(Object.freeze(new Card(val, suit)))
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
    for (let i = this.cards.length - 1; i > 0; i--) {
      let index = Math.floor(Math.random() * i)

      let tmp = this.cards[i]
      this.cards[i] = this.cards[index]
      this.cards[index] = tmp
    }
  }

  /**
   * Draws a card from the deck of cards.
   *
   * @type {function}
   * @returns {Object} Returns a Card object
   * @memberof Deck
   */
  drawCard () {
    if (this.cards.length > 1) {
      return this.cards.pop()
    } else {
      this.cards = [...this.cards, ...this.usedCards]
      this.usedCards = []
      this.shuffle()
      if (this.cards.length < 1) {
        throw new Error('Deck ran out of cards!')
      }
      return this.cards.pop()
    }
  }

  /**
   * Method to return a string that represent the deck of cards
   *
   * @type {function}
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

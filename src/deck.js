/**
 * Module for a deck of cards
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Card = require('./card.js')

class Deck {
  constructor () {
    this.cards = []
    let suits = ['♥', '♠', '♣', '♦']
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

    suits.forEach(suit => {
      values.forEach(val => {
        this.cards.push(Card.createCard(val, suit))
      })
    })
  }
  shuffle () {
    // shuffle the cards
  }
  toString () {
    let str = ''
    this.cards.forEach(card => { str += card.toString() + ' ' })
    return str
  }
}

module.exports = Deck

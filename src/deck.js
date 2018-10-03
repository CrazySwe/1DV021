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
  toString () {
    let str = ''
    this.cards.forEach(card => { str += card.toString() + ' ' })
    return str
  }
}

module.exports = Deck

/**
 * Module for a deck of cards
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const protoCard = {
  render () {
    console.log(this.toString())
  },
  toString () {
    return this.value + this.suit
  }
}

let createCard = function (val, suit) {
  return Object.create(protoCard)
}

exports.createCard = createCard

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
  return Object.create(protoCard, {
    'value': {
      value: val,
      writable: true,
      enumerable: true,
      configurable: true
    },
    'suit': {
      value: suit,
      writable: true,
      enumerable: true,
      configurable: true
    }
  })
}

exports.createCard = createCard

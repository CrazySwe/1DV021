/**
 * Starting point of application
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Deck = require('./src/deck.js')

let myDeck = new Deck()
console.log(`Before shuffle: ${myDeck.toString()}`)
myDeck.shuffle()
console.log(`After shuffle: ${myDeck.toString()}`)

/**
 * Starting point of the application
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Game21 = require('./src/game21.js')

const NR_OF_PLAYERS = 3
const PLAYERS_STOP = 8
const DEALER_STOP = 15

let game = new Game21(NR_OF_PLAYERS)

game.run(PLAYERS_STOP, DEALER_STOP)

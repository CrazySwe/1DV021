/**
 * Starting point of application
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Game21 = require('./src/game21.js')

const NR_OF_PLAYERS = 3

let game = new Game21(NR_OF_PLAYERS)
game.run()

/**
 * The starting point of the application
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

const Ellipse = require('./src/Ellipse.js')
const Circle = require('./src/Circle.js')

let ell = new Ellipse(42.7, 13.8)
console.log(ell.toString())
ell.a = 63
ell.b = 18.4
console.log(ell.toString())
ell.a = 78.9
ell.b = 68.4
console.log(ell.toString())

let circ = new Circle(6.7)
console.log(circ.toString())
circ.radius = 3.8
console.log(circ.toString())

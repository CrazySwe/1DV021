/**
 * Circle.js
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

// Reuse code from Ellipse
const Ellipse = require('./Ellipse.js')

/**
 *  Creates an object representing a circle
 *
 * @param {number} radius Radius of the circle
 */
function Circle (radius) {
  Ellipse.call(this, radius, radius)

  // custom getters/setters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Custom_Setters_and_Getters
  Object.defineProperty(this, 'radius', {
    configurable: true,
    get: function () { return this.a },
    set: function (value) { this.a = this.b = value }
  })
}

Circle.prototype.toString = function () {
  return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
}

// Debugging
let x = new Circle(3)
x.radius = 25
console.log(x.radius)

// Exports
module.exports = Circle

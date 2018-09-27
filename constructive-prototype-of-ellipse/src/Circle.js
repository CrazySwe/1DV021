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

Circle.prototype = Object.create(Ellipse.prototype)

// https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
Circle.prototype.constructor = Circle

/**
 * Returns a string representing the object
 *
 * @returns {string} String representing the object
 */
Circle.prototype.toString = function () {
  return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
}

// Exports
module.exports = Circle

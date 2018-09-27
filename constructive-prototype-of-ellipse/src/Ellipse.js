/**
 * Ellipse.js
 *
 * @author Kevin Cederholm
 * @version 1.0
 */

'use strict'

/**
 *  Creates an object representing an Ellipse
 *
 * @param {number} a Major-axis radius
 * @param {number} b Minor-axis radius
 * @constructor
 */
function Ellipse (a, b) {
  this.a = a
  this.b = b
}

/**
 * Calculates area of ellipse
 *
 * @returns {number} Area of ellipse
 */
Ellipse.prototype.getArea = function () {
  return (Math.PI * this.a * this.b)
}

/**
 * Calculates circumference of ellipse
 *
 * @returns {number} Circumference of ellipse
 */
Ellipse.prototype.getCircumference = function () {
  return (Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b))
}

/**
 * Prints representation of object
 *
 * @returns {string} String representing object
 */
Ellipse.prototype.toString = function () {
  return `a: ${this.a}, b: ${this.b}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
}
// Exports

module.exports = Ellipse

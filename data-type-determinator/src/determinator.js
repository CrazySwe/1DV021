/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me '

  // TODO: Write your code here.
  switch (typeof data) {
    case 'string':
      result += 'a string.'
      break
    case 'boolean':
      result += 'a boolean.'
      break
    case 'number':
      result += 'a number.'
      break
    case 'function':
      result += 'a function.'
      break
    default:
    // Objects are many things. Also undefined goes to default.
      if (data === null) {
      // Have to check manually for null since else it returns object for legacy reasons. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
        result += 'a null value.'
      } else if (Array.isArray(data)) {
        result += 'an array.'
      } else if (typeof data === 'object') {
        result += 'an object.'
      } else {
        result += 'an undefined value.'
      }
  }
  return result
}

exports.tellType = tellType

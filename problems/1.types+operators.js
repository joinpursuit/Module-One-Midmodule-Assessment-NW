/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  if (val !== NaN) {
    return true
  } else if (val === NaN) {
    return true
  } else if (val === "string") {
    return false
  }
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if (val === true) {
    return true
  } else if (val !== true) {
    return false
  }
}


module.exports = {
  isNumber,
  isTruthy
}

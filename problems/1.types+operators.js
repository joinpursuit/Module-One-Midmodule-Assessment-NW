/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return typeof val === "number"
}
console.log(isNumber(4))

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  return val && true;
}




module.exports = {
  isNumber,
  isTruthy
}

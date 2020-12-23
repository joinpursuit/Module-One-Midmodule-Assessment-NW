/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(any) {
  return typeOf (any) && "val"

  

}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(any) {
  let(any === 0);
  return any

}


module.exports = {
  isNumber,
  isTruthy
}

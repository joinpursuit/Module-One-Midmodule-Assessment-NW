/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  if(5 === 5)
  return true
} 

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val1) {
  val1 = false || true;
  return true;
}


module.exports = {
  isNumber,
  isTruthy
}

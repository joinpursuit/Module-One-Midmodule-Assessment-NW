/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  if (val === val) {
    return true
} else if (val === typeof Number) {
  return true
} else {
  return false 
}
}



/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
if (val === val) {
  return true
}else if (val || val){
  return true
} else {
  return false 
}
}



module.exports = {
  isNumber,
  isTruthy
}

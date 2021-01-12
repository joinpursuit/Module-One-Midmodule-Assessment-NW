/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return typeof val === "number"
}
// console.log(isNumber(false)) - how to test it

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if (val) {
    return true  
  } else {
    return false
  }
  // so upset with myself what i orginally had and then deleted smh!
  // deiffernt way to solve problem
  // function isTruthy(val) {
  // return !!val
  }
  


module.exports = {
  isNumber,
  isTruthy
}

/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
//function isNumber() {}
const isNumber = (val) => {
  return (typeof val === "number") ? true : false;
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
//function isTruthy() {}
const isTruthy =(val) => {
  return (typeof val) ? true : false;
}

module.exports = {
  isNumber,
  isTruthy
}

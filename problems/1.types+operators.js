/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
const isNumber = (val) => {
  return typeof val === 'number'
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
const isTruthy = (val) => {
  if(val) {
    return true;
} else {
  return false;
}
}

console.log(isTruthy([]));
console.log(isTruthy(7));
console.log(isTruthy("fox"));

module.exports = {
  isNumber,
  isTruthy
}

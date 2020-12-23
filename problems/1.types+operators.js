/** Takes in an value and returns if it is a number
 * @param {any} val - The input value
 * @returns {boolean} - Is val a number
 */
function isNumber(num) {
  let age = num
    return age +7
  }
  console.log(typeof(isNumber(30)))

/** Takes in a value and returns whether it is truthy
 * @param {any} val - The input value
 * @returns {boolean} - Is val truthy
 */
function isTruthy(num) {
  return num === num
}
console.log(isTruthy((Math.PI) === (3.14)))

module.exports = {
  isNumber,
  isTruthy,
};

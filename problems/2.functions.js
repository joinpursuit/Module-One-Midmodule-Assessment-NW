/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting() {
  let name = "Hello Avery!"
}
/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting() {
  let name = "Hello Avery!"
  return name
}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
function incrementGlobalCount() {
  let val = global.globalCount
  return val
}
/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply(firstNum, secondNum, thirdNum) {
  let num1 = firstNum
  let num2 = secondNum
  let num3 = thirdNum
  return num1 * num2 * num3
}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}

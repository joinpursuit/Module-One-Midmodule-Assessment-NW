/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
const logGreeting = (name) => {
  console.log(`Hello ${name}!`)
}

/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting(name) {
return `Hello ${name}!`
}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
const incrementGlobalCount = (val) =>{
  global.globalCount = global.globalCount + val
}
/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
const multiply = (firstNum,secondNum,thirdNum) => {
  let number = firstNum * secondNum * thirdNum
  return number
}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}

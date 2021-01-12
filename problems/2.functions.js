/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting(name) {
  console.log("Hello " + name + "!")
}
// 
// Don't second guess yourself always go with your first answer!! 
// Then ask for help to understand why your original answer didn't work. It could've been an syntax error
/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
// function greeting() {
const greeting = name => {
  return `Hello ${name}!`
}
// console.log(greeting("auredy")) to run my own file in node
// string interpolation^^
// return "Hello " + name + "!" 
// string concatenation ^^

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
// function incrementGlobalCount() {
const incrementGlobalCount = val => {
  global.globalCount += val;
  // global.globalCount = global.globalCount + val^^
}
// global can be accessed anywhere in node/javascript
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

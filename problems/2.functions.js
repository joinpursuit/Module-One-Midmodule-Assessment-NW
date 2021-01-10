/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null} <---error?
*/
//function logGreeting() {}
const logGreeting = (name) => {
  console.log(`Hello ${name}!`); 
}

/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
//function greeting() {}
const greeting = (name) => {
return `Hello ${name}!`;  
}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {undefined}
* @modifies {global.globalCount}
*/
//function incrementGlobalCount() {}
const incrementGlobalCount = (val) => {
global.globalCount += val;
}

/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
//function multiply() {}
const multiply = (firstNum, secondNum, thirdNum) => {
  return firstNum * secondNum * thirdNum;
}


module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}

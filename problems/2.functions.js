/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting(name) {
  let greeting = "Hello";
  let name = "Avery"
}
console.log(greeting(" Avery!")

/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
  function logGreeting(name) {
    let greeting = "Hello";
    let name = "Avery";
    return greeting + " Avery" + "!";
  }

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
function incrementGlobalCount() {

}
/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply(firstNum, secondNum, thirdNum) {
  let product = firstNum * secondNum * thirdNum;
  return product;
}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}

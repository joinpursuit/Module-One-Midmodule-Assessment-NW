/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
const logGreeting = () => {
   let name = " Ben!"   
    console.log("Hello" + name);
}

/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
const greeting = () => {
    let name = " Ben!"
    let str = "Hello"
    return str + name;
}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
const incrementGlobalCount = (val = 10) => {
       let i = global.globalCount
      return i + val;

}
/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
const multiply = (firstNum, secondNum, thirdNum) => {
    let product = firstNum * secondNum * thirdNum
      return product;

}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}

/** Logs a custom greeting to the console in the form "Hello Avery!"
 * @param {string} name - The name of the user to greet
 * @returns {null}
 */
function logGreeting() {
    let name = Avery;
    console.log(`Hello ${name}`);
}

/** Returns a custom greeting string in the form "Hello Avery!"
 * @param {string} name - The name of the user to greet
 * @returns {string} - The custom greeting
 */
function greeting(name = "Avery") {
    return `Hello ${name}!`

}

/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
 * @param  {number} val - The number to add to globalCount
 * @returns {null}
 * @modifies {global.globalCount}
 */
function incrementGlobalCount(val) {
    let global = []
    return global.push(val++)
}
/** Multiplies three numbers
 * @param {number} firstNum - The first number
 * @param {number} secondNum - The second number
 * @param {number} thirdNum - The third number
 * @returns {number} - The product of the three numbers
 */

function multiply(FirstNum, secondNum, thirdNum) {
    let sumofaguments = (firstNum + secondNum + thirdNum)
    let numarg = 3
    return sumofaguments * numarg;
}

module.exports = {
    logGreeting,
    greeting,
    incrementGlobalCount,
    multiply
}
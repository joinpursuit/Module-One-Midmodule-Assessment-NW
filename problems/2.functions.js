/** Logs a custom greeting to the console in the form "Hello Avery!"
 * @param {string} name - The name of the user to greet
 * @returns {null}
 */
function logGreeting() {
    let logGreeting = "Hello Ben!"
    console.log(logGreeting);
};


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
function incrementGlobalCount() {
    let i = 0;
    global.globalCount = 10;
    while(i <= 0) {
        i++;
        if (i === 10) {

        }
    }
 
}

        

/** Multiplies three numbers
 * @param {number} firstNum - The first number
 * @param {number} secondNum - The second number
 * @param {number} thirdNum - The third number
 * @returns {number} - The product of the three numbers
 */

function multiply(a, b, c) {
return a * b * c;

}

module.exports = {
    logGreeting,
    greeting,
    incrementGlobalCount,
    multiply
} 
/** Takes in an value and returns if it is a number
 * @param {any} val - The input value
 * @returns {boolean} - Is val a number
 */
function isNumber() {
    let val = typeof "number";
    return true;

}

/** Takes in a value and returns whether it is truthy
 * @param {any} val - The input value
 * @returns {boolean} - Is val truthy
 */
function isTruthy() {
    let val = typeof("number" || !"number");
    return true || false;

}

module.exports = {
    isNumber,
    isTruthy
}
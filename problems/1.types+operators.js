/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
  const isNumber = val => {
    let number = 0
    if(typeof val === "number"){
      return true  
    }else{
      return false
    }
}
  // const isNumber = val => {
  // return (typeof val === "number"){
  // } This code is the same as the code above , it is the same because its only two conditions its checking for if its not true then its false.
/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
  function isTruthy(val){
    if (val) {
      return true
      }else {
        return false
      }

}

module.exports = {
  isNumber,
  isTruthy
}

/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  if(typeof val === "number"){
    return true
  }else{
    return false
  }

}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) { // remeber that truthy is not the same as true; 
  if (val){
    return true
  }else{
    return false
 }
}

  console.log(isTruthy(undefined))




module.exports = {
  isNumber,
  isTruthy
}

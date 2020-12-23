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
function isTruthy(val) {
  if (typeof val === "0"){
    return false
  }else if( typeof val === "false"){
    return false
  }else if(typeof val === ""){
    return false
  }else if(typeof val === "NaN"){
    return false
  }else if (typeof val === "null"){
    return false
  }else if (typeof val === "undefined"){
    return false
  }else {
    return true
  }
  }

  console.log(isTruthy(null))




module.exports = {
  isNumber,
  isTruthy
}

/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
const isNumber =(val) =>{
  if ( typeof val === 'number'){
    return true;
  }else{
    return false;
  }
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
const isTruthy =(val) =>{
  if (val){
    return true;
  }else{ 
    return false;
  }

  // if ( val !== 0 && val !== NaN && val !== false){
  //   return  true;
  // }else if ( val !== null && val !== undefined && val !== " "){
  //   return true;
  // }else{
  //   return false
  // }
}


module.exports = {
  isNumber,
  isTruthy
}

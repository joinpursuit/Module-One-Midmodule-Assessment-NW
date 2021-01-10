/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
 * @param {number[]} arr - The input array
 * @returns {number} - The average of the first and last values
 */
//function firstAndLastAverage() {}
/* const firstAndLastAverage = (arr) => {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let average = 0;
  if (arr.length >= 2) {
    average = (first + last) / 2;
    return average;
  } else {
    return null;
  }
}; */
const firstAndLastAverage = (arr) => {
 if(arr.length < 2) {
  return null;
 }
  return (arr[0] + arr[arr.length - 1]) / 2
}

/** Duplicates all values inside an array.
 * Sample input: [1,4,2,5]
 * Sample output: [1,4,2,5,1,4,2,5]
 * @param {number[]} arr - The input array
 * @returns {number[]} - The duplicated array
 */
//function duplicateArray() {}
const duplicateArray = (arr) => {
   return arr.concat(arr); // return[..arr, ...arr]
}  
//DOES NOT WORK! infinate loop -- always adding into the array so the length keeps changing
//creating an infinate loop
  // let newArr = arr;
  // for(i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i]); //both arrays are equal to each other so the length keeps changing with each push
  // }
  // return newArr;

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
 * @param {any[]} arr - The input array
 * @returns {any[]} - The array with the first 3 elements removed
 */
//function removeFirstThreeElements() {}
const removeFirstThreeElements = (arr) => {
  arr.splice(0, 3)
  return arr;
}

//DOES NOT WORK
// const removeFirstThreeElements = (arr) => {
//   let newArr = [];
//   let emptyArr = [];
//   if (arr.length < 3){
//    console.log(emptyArr); // how do I return an empty array? ==> if(arr.length < 3) return []
//    //return emptyArr; 
//    //return [];
//    //return "[]";
//   }

//   if (arr.length >= 3)
//     for (i = 0; i < arr.length; i++) {
//       newArr.push(arr.shift(i)); <== WRONG: shift does not take in an argument
//     }
//   return newArr; // array with the first 3 elements 
//   //return arr; // test is asking to return the modified array to pass
// }

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements,
};

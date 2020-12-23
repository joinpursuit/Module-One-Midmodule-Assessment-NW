/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
 * @param {number[]} arr - The input array
 * @returns {number} - The average of the first and last values
 */
//function firstAndLastAverage() {}
const firstAndLastAverage = (arr) => {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let average = 0;
  if (arr.length >= 2) {
    average = (first + last) / 2;
    return average;
  } else {
    return null;
  }
};

/** Duplicates all values inside an array.
 * Sample input: [1,4,2,5]
 * Sample output: [1,4,2,5,1,4,2,5]
 * @param {number[]} arr - The input array
 * @returns {number[]} - The duplicated array
 */
//function duplicateArray() {}
const duplicateArray = (arr) => {
  // let newArr = [];
  // for(i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i]);
  // }
  // return newArr;
} // 

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
 * @param {any[]} arr - The input array
 * @returns {any[]} - The array with the first 3 elements removed
 */
//function removeFirstThreeElements() {}
const removeFirstThreeElements = (arr) => {
  let newArr = [];
  let emptyArr = [];
  if (arr.length < 3){
   return emptyArr; // how do I return an empty array?
    //return [];
    //return "[]";
  }

  if (arr.length >= 3)
    for (i = 0; i < arr.length; i++) {
      newArr.push(arr.shift(i));
    }
  //return newArr; // array with the first 3 elements 
  return arr; // test is asking to return the modified array to pass
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements,
};

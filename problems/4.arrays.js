/** Averages the first and last value of an array.  
 * Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
const firstAndLastAverage = (arr) => {
  return arr.shift() + arr.pop(); 
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
const duplicateArray = (arr) => {
 let newArray = [];
 newArray.push(arr, arr);
 return newArray;
}

/** Removes the first 3 elements from an array. 
 * If the array has fewer than 3 elements, 
 * return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
const removeFirstThreeElements = (arr) => {
  let i = 0;
  while (i > arr.length - 1) {
    if (i > arr.length - 1) {
      arr.pop();
      arr.pop();
      arr.pop();
    } 
    else if (i < arr.length -1) {
      return null
    } 
return arr
  }
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

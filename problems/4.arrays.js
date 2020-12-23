/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
const firstAndLastAverage = (arr) => {}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
const duplicateArray = (arr) => {
  a = [];
  b = [];
  for (i =0; i < a.length; i++){
    b.push(a[i]);
    b.push(a[i]);
  }
   return a=b
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
const removeFirstThreeElements = (arr) => {
  let indexToRemove = [0,1,2]
  let numberToRemove = [1,4,3]
  return arr.splice(indexToRemove, numberToRemove)
  

}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

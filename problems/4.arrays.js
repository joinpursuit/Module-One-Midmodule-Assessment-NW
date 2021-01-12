/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  if (arr.length < 2) {
    return null;
  }
  return (arr[0] + arr[arr.length -1]) / 2
}
// const firstAndLastAverage = arr => {


/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr){
  let output = []
  for (let i = 0; i<arr.length; i++) { 
    output.push(arr[i]);
  }
  for (let i = 0; i<arr.length; i++) { 
    output.push(arr[i]);
  }
  return output
} 
// better way to write the problem return arr.concat(arr); = easiest way to ans
// return [..arr' ..arr]; = diferrent output

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  arr.splice(0, 3)
  return arr;
}

// splice evaluates to what was removed from the array
// go over splice and this question again
module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let arr = []
  for (i = 0; i < arr.length; i++){
    return (arr[0] / arr[2])
  }
  return arr
}


/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
let oldArr = [1,4, 2, 5];
let newArr = [oldArr.slice()];
return newArr
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
let i = 0 
let arr = []
if (arr.push(arr[0,1,2])) {
return arr
}
}  

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

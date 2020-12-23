/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
const firstAndLastAverage = (arr) => {
  if (arr.length < 2){
    return null
  }
  else{
    totalAverage = (arr[0] + arr[arr.length - 1])/2
  }
  return totalAverage;
  }

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
const duplicateArray = (arr) => {
  let arr2 = arr.concat(arr);
    return  arr2;
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
const removeFirstThreeElements = (arr) =>{
  let arr2 = [];
  if (arr.length < 3){
    return arr2
  }
  else {
   arr2 = arr.slice(3)
  }
  return arr2
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

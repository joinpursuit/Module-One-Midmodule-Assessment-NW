/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let sum = (arr.length [0]) + (arr.length [-1])
  let ave= sum / 2
  if (arr.length > 2){
   return sum
 } else (arr.length < 2){ 
   return null
 }
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr=[]) {
  let duplicate = arr.length 
  duplicate.push()
  }
  

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
if (arr.length >= 3){
  arr.splice(0, 1, 2)}
 else if (arr.length < 3){
 }return ''
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

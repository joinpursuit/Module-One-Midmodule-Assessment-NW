/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  if(arr.length>=2){
    let sum = arr[0] + arr[arr.length-1]
    let average = sum/2
    return average 
  }else{
    return null 
  }
}
console.log(firstAndLastAverage([2,3,4,5]))

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
  let arr2 =arr.slice(0)
  return arr.concat(arr2)
  //for(let i= 0; i<arr2.length; i++){
   // arr2.push(arr[0])
 // }
 
}

console.log(duplicateArray[1,2,3,4])

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  if(arr.length>=3){
   return arr.splice(3)
  }else{
    return []
  }

}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

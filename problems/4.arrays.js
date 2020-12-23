/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
const firstAndLastAverage = (arr = [5, 7, 9, 10 ])=> {
   let num1 = arr[0]
   let num2 = [arr.length-1]   
  let avg = num1 + num2 / 2
       return avg;

}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
const duplicateArray = (a, b) => {
  let a = [1, 2, 3, 4, 5];
  let b = [1, 2, 3, 4, 5];
return (a.concat(b));
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
const removeFirstThreeElements = (arr = [ sugar, coffee, milk, tea]) => {
      arr.splice(0,1,2)
      return arr;

}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}

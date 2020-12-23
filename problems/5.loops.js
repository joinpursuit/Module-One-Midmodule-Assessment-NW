/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
const evenNumbers = (num)=> {
let i = 0;
 let newArr = [];
 while (i <= num){
    if ( i % 2 === 0)
      newArr.push(i)
      i++
  }
    return newArr
  }



/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
const multiplesToOneThousand = (num) => {
  let i = 0
  let newArr = [];
  while (i < 1000){
    if (i % num === 0)
      newArr.push(i)
      i++;
  }
  return newArr
  
  }
/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
const powersOfTwo = (count) => {
  let i = 0
  let newArr = [];
  while(i < count){
    double = Math.pow(2,i)
      newArr.push(double)
      i++;
  }
return newArr
}

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}

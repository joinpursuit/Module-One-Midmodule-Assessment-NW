/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
function evenNumbers(num) {
  let arr = []
  let num1 = 0
  while (num1 <= num) {
    if (num1 % 2 === 0) {
      arr.push(num1)
    }
    num1 += 1
  }
  return arr
}

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
function multiplesToOneThousand(num) {
  let arr = []
  let num1 = 0
  while (num1 <= 1000) {
    if (num % num1 === 0) {
      arr.push(num1)
    }

    num1+= num
  }
  return arr
  
}
/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo(count) {
let powers = []
for (let i = 0; i < count; i++){
  powers.push(i^count)
}
return powers
}

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}



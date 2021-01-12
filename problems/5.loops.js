/** Returns every even number from 0 to a given number
 * @param {number} num - The number to iterate up to
 * @param {number[]} - An array of even numbers from 0 to {num}
 */
// i++ is syntactic sugar for i += 1
// which is syntactic sugar for 1 = i + 1
// go over and finish the loops lab to understand loops!!
function evenNumbers(num) {
  let output = [];
  
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      output.push(i)
      
    }
    
  }
  return output;
}
console.log(evenNumbers([9]));
// let output = [];
// let num = 0
// while (i <= num) {
//   if ( i % 2 === 0) {
//     i++
//     output.push(i)
//   }
// }
// return output

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
 * @param {number} num - The number to find multiples of
 * @returns {number[]} - An array of all multiples of {num} up to 1000
 */
function multiplesToOneThousand(num) {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    if (i % num === 0) {
      output.push(i);
    }
  }
  return output;
}
// let num = 10
// for(let num = 0; num <=1000; num++) {
//   return
// }
//
// // i++ is syntactic sugar for i += 1
// let output = []
// for (let i = 0; i < 1000; i += num) {
//    output.push(i)
//   }
//   return output;
// }
// or simpler way or shorter code^^

/** Returns the first n powers of 2 (starting at 0)
 * Sample input: 6
 * Sample output: [1,2,4,8,16,32]
 * This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
 * @param {number} count - How many powers of two to find
 * @returns {number[]} - An array with the first {count} powers of two
 */
function powersOfTwo(count) {
  let output = [];
  let power = 0;
  while (output.length < count) {
    output.push(2 ** power);
    power += 1;
  }
  return output;
}
// const powersOfTwo = count => {
//   let output = []
//   for (let i = 0; i<=0; i++)
//   Math.pow()
// }
// return []
// built method math.pow(2, 3) =output 8

//let output = []
// let power = 0;
// while (output.length < count) {
//   output.push(math.pow(2) power);
//   power += 1;
// }
// return output;
// }

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo,
};

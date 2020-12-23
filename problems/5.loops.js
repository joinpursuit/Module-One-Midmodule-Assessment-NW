/** Returns every even number from 0 to a given number
 * @param {number} num - The number to iterate up to
 * @param {number[]} - An array of even numbers from 0 to {num}
 */
//function evenNumbers() {}
const evenNumbers = (num) => {
  let evenArray = [];
  for (i = 0; i <= num; i += 2) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
};

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
 * @param {number} num - The number to find multiples of
 * @returns {number[]} - An array of all multiples of {num} up to 1000
 */
//function multiplesToOneThousand() {}
const multiplesToOneThousand = (num) => {
  let multiplesArr = [0, num];
  loop = Math.floor(999 / num);
  for (i = 0; i < loop - 2; i++) {
    if ((num += num < 999)) {
      multiplesArr.push((num += num));
    }
  }
  return multiplesArr;
};

/** Returns the first n powers of 2 (starting at 0)
 * Sample input: 6
 * Sample output: [1,2,4,8,16,32]
 * This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
 * @param {number} count - How many powers of two to find
 * @returns {number[]} - An array with the first {count} powers of two
 */
//function powersOfTwo() {}
const powersOfTwo = (count) => {
  let expArr = [];
  for (i = 0; i < count; i++) {
    expArr.push(2 ** i);
  }
  return expArr;
};

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo,
};

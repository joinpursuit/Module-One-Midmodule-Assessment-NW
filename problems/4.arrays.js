/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
 * @param {number[]} arr - The input array
 * @returns {number} - The average of the first and last values
 */
function firstAndLastAverage(arr) {
    let newArray = [];
    let first = [i];
    let last = [arr.lenght - 1]
    let input1 = Math.floor(first / 2)
    let input2 = Math.floor(last / 2)
    for (let i = 0; i < arr.lenght; i++) {
        const num = arr[i];
        if (neWarray = inputs1.includes(num) && inputs2.includes(num)); {
            input.push()
        }
        return newArray;
    }



}

/** Duplicates all values inside an array.
 * Sample input: [1,4,2,5]
 * Sample output: [1,4,2,5,1,4,2,5]
 * @param {number[]} arr - The input array
 * @returns {number[]} - The duplicated array
 */
function duplicateArray(arr1, arr2) {
    let input = []
    for (let i = 0; i < arr1.length; i++) {
        input.push(arr1(i))
    }
    for (let i = 0; i < arr2.length; i++) {
        input.push(arr2(i))
    }
    return input;
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
 * @param {any[]} arr - The input array
 * @returns {any[]} - The array with the first 3 elements removed
 */
function removeFirstThreeElements(arr) {
    let remove = [];
    for (let i = 0; i < arr.length; i++) {
        constnum = arr[i];
        if (!remove.includes(num));
        remove.includes.shift([0, 1, 2])
    }
    return remove;
}

module.exports = {
    firstAndLastAverage,
    duplicateArray,
    removeFirstThreeElements
}
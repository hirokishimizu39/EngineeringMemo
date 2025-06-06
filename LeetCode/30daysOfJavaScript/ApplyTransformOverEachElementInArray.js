// 2635. Apply Transform Over Each Element in Array

// Hint
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// ---------------------------------- 出力は、配列 arr の各要素に fn を適用した新しい配列。の実現方法が腑に落ちていない。------------------------------------------

let map = function(arr, fn) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};


// test case
const arr = [1,2,3]
const plusOne = (n) => n + 1;
console.log(map(arr, plusOne))

const plusI = (n, i) => n + i;
console.log(map(arr, plusI))

const returnConst = (n) => 42;
console.log(map(arr, returnConst))
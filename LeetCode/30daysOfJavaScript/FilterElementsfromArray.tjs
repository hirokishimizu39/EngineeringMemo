type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Example usage:

// Test case 1
const arr1 = [0, 10, 20, 30];
const greaterThan10 = (n: number) => n > 10;
console.log(filter(arr1, greaterThan10)); // Output: [20, 30]

// Test case 2
const arr2 = [1, 2, 3];
const firstIndex = (n: number, i: number) => i === 0;
console.log(filter(arr2, firstIndex)); // Output: [1]

// Test case 3
const arr3 = [-2, -1, 0, 1, 2];
const plusOneTruthy = (n: number) => n + 1 > 0;
console.log(filter(arr3, plusOneTruthy)); // Output: [0, 1, 2]

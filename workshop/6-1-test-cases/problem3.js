let verifyEquals = require('../../assets/verify-equals');

// Problem 3
// ---------
// Step 1
// This function expects an array of 2 numbers as input (e.g. [1,2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
// You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')

function f(arr) {
    if (Array.isArray(arr) != true) {
        return undefined
    }
    if (arr.length !== 2) {
        return undefined
    }
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return undefined
    }
    else {
        return arr[0] + arr[1];
    }
}
console.log(f([1, 2]));
console.log(f([1,2,3]));
console.log(f('hello'));

// Step 2
// We need 7 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 4], [-3, 3], [4, 5], [2, 6], [8, 0], ['blue', 'five'], [4]];
let outputs = [6, 0, 9, 8, 8, undefined, undefined];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);

console.log('All tests passed for ' + __filename);
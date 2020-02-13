let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;
    arr.forEach(elem => {
        if (typeof elem === 'number') {
            total += elem
        }
    });
    return total;
}

// Test cases
let inputs = [[235, 5], [12, 425], [5], [0], ['']];
let outputs = [240, 437, 5, 0, 0];

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

console.log('All tests passed for ' + __filename);

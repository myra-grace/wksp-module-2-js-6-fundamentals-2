let verifyEquals = require('../../assets/verify-equals');

// Problem 7
// ---------
// Step 1
// - The function input is an array. 
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array. 
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function f(arr) {
    switch (true) {
        case Array.isArray(arr) != true:
        case arr.length !== 2:
        case typeof arr[0] != 'string':
        case typeof arr[1] != 'number':
            return undefined;
            break;
        case arr[1] < 1:
            return '';
            break;
    
        default:
            return arr[0].repeat(arr[1]);
            break;
    }
}

console.log(f(['Hello', 2]));

// Step 2
// We need 7 test cases.
// Don't forget to test all of the question parameters

let inputs = [['Hello', 2], ['Scott', 'hi'], [3, 'five'], [3, 4], [9, 'ver'], ['', 3], ['ge', 0]];
let outputs = ['HelloHello', undefined, undefined, undefined, undefined, '', ''];

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

let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    let words = str.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= longest.length) {
            longest = words[i];
        }
    }
    return longest
}

console.log(f("hey hello morning"));

// Test cases
let inputs = ["hey hi", "dhsajdk kdjhaks jh", "eobb rnvieern vnir vn", "", "238 m 4r"];
let outputs = ['hey', 'kdjhaks', 'rnvieern', '', '238'];

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

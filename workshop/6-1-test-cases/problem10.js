let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  let words = str.split(' ');
  let editedWords = [];
  for (let i = 0; i < words.length; i++) {
    let newWord = [];
    for (let j = 0; j < words[i].length; j++) {
      let word = words[i];
      if (j === 0) {
        newWord.push(word[j].toUpperCase());
      } else {
        newWord.push(word[j].toLowerCase());
      }
    }
    editedWords.push(newWord.join(''));
  }
  return editedWords.join(' ');
}

// Test cases
let inputs = ['canDy cane yuM', 'this IS THE SECOND test', 'and HERE is the tHIrd', 'let\'s haVE A FOURTH', 'FInaL'];
let outputs = ['Candy Cane Yum', 'This Is The Second Test', 'And Here Is The Third', 'Let\'s Have A Fourth', 'Final'];

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

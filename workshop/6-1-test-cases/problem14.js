let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  let n = '';
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i % 40 === 0) {
      n += '\n';
      if (str[i] !== ' ') {
        n += str[i];
      }
    } else {
      if (str[i-1] === '\n' && str[i] === ' ') {
        continue;
      }
      n += str[i];
    }
  }
  return n;
}

// Test cases
let inputs = ['Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consecteturr adipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consecteturadipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam'];
let outputs = ['Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur\nr adipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam', 'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam'];

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

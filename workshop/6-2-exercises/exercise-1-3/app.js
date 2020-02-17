// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let reset = document.getElementById('reset');

btn1.style.backgroundColor = "gold";
btn2.style.backgroundColor = "gold";
btn3.style.backgroundColor = "gold";
btn4.style.backgroundColor = "gold";

let buttons = document.querySelectorAll("button");

function toggleColor(target) {
  switch (true) {
    case target.isSameNode(btn1):
      if (btn1.style.opacity != "0") {
        btn1.style.opacity = "0";
      } else {
        btn1.style.opacity = "100%";
      }
      return;
    case target.isSameNode(btn2):
    if (btn2.style.backgroundColor != "crimson") {
        btn2.style.backgroundColor = "crimson";
    } else {
        btn2.style.backgroundColor = "gold";
    }
      return;
    case target.isSameNode(btn3):
    if (btn3.style.backgroundColor != "lightblue") {
        btn3.style.backgroundColor = "lightblue";
    } else {
        btn3.style.backgroundColor = "gold";
    }
      return;
    case target.isSameNode(btn4):
    if (btn4.className === '') {
        btn4.classList.add("jitters");
    } else {
        btn4.className = '';
    }
      return;
    case target.isSameNode(reset):
        btn1.style.opacity = "100%"
        btn2.style.backgroundColor = "gold";
        btn3.style.backgroundColor = "gold"
        btn4.className = '';
      return;

    default:
      break;
  }
}

document.addEventListener("click", event => {
  toggleColor(event.target);
});
// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

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

    default:
      break;
  }
}

document.addEventListener("click", event => {
  toggleColor(event.target);
});

// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');

let buttons = document.querySelectorAll('button');

function theOne(target) {
    switch (true) {
        case target.isSameNode(btn1):
            btn1.style.display = 'none';
            return;
        case target.isSameNode(btn2):
            btn2.style.backgroundColor = 'crimson';
            return;
        case target.isSameNode(btn3):
            btn3.style.backgroundColor = 'lightblue';
            return;
        case target.isSameNode(btn4):
            btn4.classList.add('jitters');
            return;
    
        default:
            break;
    }
}

document.addEventListener('click', event => {
    theOne(event.target);
});

console.log(buttons);
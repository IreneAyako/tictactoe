//create these constants so we can ue the strings throughout the app without duplication
const X_CLASS = "x";
const C_CLASS = "c";

//select all the boxes
const boxElements = document.querySelectorAll("[data-box]");

let cTurn;

//add an event listener which can only be fired once when clicked on a box
boxElements.forEach((box) => {
  box.addEventListener("click", clicker, { once: true });
});

function clicker(e) {
  //target boxes
  const box = e.target;
  const currentClass = cTurn ? C_CLASS : X_CLASS;
  //place x and circle
  place(box, currentClass);
  //win
  //draw
  //turns
}

function place(box, currentClass) {
  box.classList.add(currentClass);
}

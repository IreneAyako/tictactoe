//create these constants so we can ue the strings throughout the app without duplication
const X_CLASS = "x";
const C_CLASS = "c";
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//select all the boxes
const boxElements = document.querySelectorAll("[data-box]");
const tttboard = document.getElementById("tttboard");
const feedbackTextElement = document.querySelector("[data-feedback-message]");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("restart");
let cTurn;

start();

startButton.addEventListener("click", start);

function start() {
  //add an event listener which can only be fired once when clicked on a box
  boxElements.forEach((box) => {
    box.classList.remove(X_CLASS);
    box.classList.remove(C_CLASS);
    box.removeEventListener("click", clicker);
    box.addEventListener("click", clicker, { once: true });
  });
  feedbackElement.classList.remove("show");
}

function clicker(e) {
  //target boxes
  const box = e.target;
  const currentClass = cTurn ? C_CLASS : X_CLASS;
  //place x and circle
  place(box, currentClass);
  //win
  if (win(currentClass)) {
    endGame(false);
  } else if (draw()) {
    endGame(true);
  } else {
    swap();
  }
  //draw
  //turns
  //hover();
}

function endGame(draw) {
  if (draw) {
    feedbackTextElement.innerText = "Draw 😂🤪😂!!";
  } else {
    feedbackTextElement.innerText = `${cTurn ? "Os" : "Xs"} Rule 🥳👏!!`;
  }
  feedbackElement.classList.add("show");
}

function draw() {
  return [...boxElements].every((box) => {
    return box.classList.contains(X_CLASS) || box.classList.contains(C_CLASS);
  });
}

function place(box, currentClass) {
  box.classList.add(currentClass);
}

function swap() {
  cTurn = !cTurn;
}

/*function hover() {
  tttboard.classList.remove(X_CLASS);
  tttboard.classList.remove(C_CLASS);
  if (cTurn) {
    tttboard.classList.add(C_CLASS);
  } else {
    tttboard.classList.add(X_CLASS);
  }
}*/

function win(currentClass) {
  return WIN_COMBOS.some((combination) => {
    return combination.every((index) => {
      return boxElements[index].classList.contains(currentClass);
    });
  });
}

// Grab stuff from DOM
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
// const finalMessageRevealWord = document.getElementById(
//   "final-message-reveal-word"
// );

const figureParts = document.querySelectorAll(".figure-part");
const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "algorithms",
  "datastructures"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
// console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

// show hidden word
function displayWord() {
  wordEl.innerHTML = `
    
    ${selectedWord
      .split("")
      .map(
        letter => `
        <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
        </span>
        
        `
      )
      .join("")}
    
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  //   console.log(innerWord);
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You Won! 🤗";
    popup.style.display = "flex";
  }
}

displayWord();

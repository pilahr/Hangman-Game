// import words from "./data/randomWords";
const words = [
  "happy",
  "snake",
  "communication",
  "letter",
  "monitor",
  "application",
  "network",
  "water",
  "small",
  "house",
  "food",
  "remove",
];

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// ----- GET ELEMENTS ----- //
const startButton = document.querySelector(".overlay__button");
const displayScreen = document.querySelector(".display__letters");
const overlayPage = document.querySelector(".overlay");
const newGameButton = document.querySelector(".gaming-buttons__new-game");

//  ----- FUNCTION ----- //
const insertLetters = () => {
  const alphabetsContainer = document.querySelector(".alphabets");
  alphabets.forEach((letter) => {
    const letterHtml = `<button>${letter}</button>`;
    alphabetsContainer.innerHTML += letterHtml;
  });
};
insertLetters();

// RANDOM WORD
let randomWord = "";
const getRandomWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
};

// ADD WORD TO DISPLAY
const addHtmlWord = (letter) => {
  return `<p hidden-word="${letter}">_</p>`;
};
const displayWordArea = (words) => {
  for (let i = 0; i < words.length; i++) {
    const letter = words[i];
    const htmlWord = addHtmlWord(letter);
    displayScreen.innerHTML += htmlWord;
  }
};

// ----- START BUTTON ----- //
const handleStartButton = (event) => {
  overlayPage.style.display = "none";
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  // + to show lives
};

// NEW GAME BUTTON
const handleNewGameButtonClick = (event) => {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
};

// ----- EVENT LISTENER ----- //
startButton.addEventListener("click", handleStartButton);

newGameButton.addEventListener("click", handleNewGameButtonClick);

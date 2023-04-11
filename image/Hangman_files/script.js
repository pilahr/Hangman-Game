// import words from "./randomWords";

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
const giveUpButton = document.querySelector(".gaming-buttons__give-up");

const alphabetsButtons = document.querySelectorAll(".alphabets button");

const showLives = document.querySelector(".container__lives");

//  ----- FUNCTION ----- //
// INSERT ALPHABETS BUTTONS
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
  return `<p data-letter="${letter}">_</p>`;
};
const displayWordArea = (word) => {
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const htmlWord = addHtmlWord(letter);
    displayScreen.innerHTML += htmlWord;
  }
};

// ----- START BUTTON ----- //
const handleStartButton = (event) => {
  overlayPage.style.display = "none";
  getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
  return;
};

// NEW GAME BUTTON
const handleNewGameButtonClick = (event) => {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
};

// GIVE UP BUTTON
const handleGiveUpButtonClick = (event) => {
  displayScreen.innerHTML = randomWord;
};

// CHECK EXISTING ALPHABET -- not working yet
const checkExistingAlphabet = (letter) => {
  const hiddenLetters = document.querySelectorAll(".display__letters p");

  hiddenLetters.forEach((hiddenLetter) => {
    const hidden = hiddenLetter.innerHTML == "_";
    const letterElement = hiddenLetter.dataset.letter;
    if (hidden && letterElement == letter) {
      hiddenLetter.innerHTML = letter;
      hasLostLife = false;
    }
  });
};

const handleAlphabetButtonClick = (event) => {
  document.body.style.backgroundColor = "red";
  checkExistingAlphabet(button.innerHTML);
  loseOneLife();
  hasLostLife = true;
};

// LIVES
let hasLostLife = true;

let totalLives = [1, 2, 3, 4, 5];

const showPlayerLife = () => {
  showLives.innerHTML = "";
  totalLives.forEach((life) => {
    let htmlLife = `<img src="./image/candy.png" />`;
    showLives.innerHTML += htmlLife;
  });
};

const loseOneLife = () => {
  if (hasLostLife) {
    totalLives.pop();
    showPlayerLife();
    hasLostLife = true;
    gameOver();
  }
};

// GAME OVER
const gameOver = () => {
  if (totalLives.length === 0) {
    alert("GAME OVER!");
  } else {
    return;
  }
};

// ----- EVENT LISTENER ----- //
startButton.addEventListener("click", handleStartButton);

newGameButton.addEventListener("click", handleNewGameButtonClick);

giveUpButton.addEventListener("click", handleGiveUpButtonClick);

// ALPHABETS BUTTON -- not working yet
alphabetsButtons.forEach((button) => {
  button.addEventListener("click", handleAlphabetButtonClick);
});

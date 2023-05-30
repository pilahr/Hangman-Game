import words from "./randomWords.js";

// ---- CREATE AN ARRAY OF THE ALPHABETS ---- //
const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
const alphabets = alphabetsString.split("");

// ---- GLOBAL VARIABLES ---- //
let winCount = 0;
let randomWord = "";

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

const alphabetsButtons = document.querySelectorAll(".alphabets button");

// RANDOM WORD
const getRandomWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
};

// ADD WORD TO DISPLAY
const displayScreen = document.querySelector(".display__letters");

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

// GAME OVER
const gameOver = () => {
  if (totalLives.length === 0) {
    alert("GAME OVER!  ❌ NO CANDY 🍭🍭🍭 FOR YOU");
    blocker(true);
  } else {
    return;
  }
};

// LIVES
let hasLostLife = true;

let remainingLives = [1, 2, 3, 4, 5];

const showLives = document.querySelector(".container__lives");

const showPlayerLife = () => {
  showLives.innerHTML = "";
  remainingLives.forEach((life) => {
    let htmlLife = `<img src="./image/candy.png" />`;
    showLives.innerHTML += htmlLife;
  });
};

const loseOneLife = () => {
  if (hasLostLife) {
    remainingLives.pop();
    showPlayerLife();
    hasLostLife = true;
    gameOver();
  }
};

// ----- START BUTTON ----- //
const startButton = document.querySelector(".overlay__button");
const overlayPage = document.querySelector(".overlay");

const handleStartButton = (event) => {
  overlayPage.style.display = "none";
  getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
  confetti({
    particleCount: 700,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 700,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });
  return;
};

// NEW GAME BUTTON
const newGameButton = document.querySelector(".gaming-buttons__new-game");

const handleNewGameButtonClick = (event) => {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  blocker(false);

  alphabetsButtons.forEach((button) => {
    button.style.backgroundColor = "#fcde67";
  });

  showLives.innerHTML = "";
  remainingLives = [1, 2, 3, 4, 5];
  showPlayerLife();
};

// GIVE UP BUTTON
const giveUpButton = document.querySelector(".gaming-buttons__give-up");

const handleGiveUpButtonClick = (event) => {
  displayScreen.innerHTML = randomWord;
  alert("Here's the answer, let's play another game 😉");
  blocker(true);
};

// CHECK EXISTING ALPHABET --
const checkExistingAlphabet = (letter) => {
  const hiddenLetters = document.querySelectorAll(".display__letters p");
  hiddenLetters.forEach((hiddenLetter) => {
    const hidden = hiddenLetter.innerHTML == "_";
    const letterElement = hiddenLetter.dataset.letter;
    if (hidden && letterElement == letter) {
      hiddenLetter.innerHTML = letter;
      hasLostLife = false;
      winCount += 1;
      gameStatus(randomWord);
    }
  });
};

// ALPHABETS BUTTON
alphabetsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "green";
    checkExistingAlphabet(button.innerHTML);
    loseOneLife();
    hasLostLife = true;
  });
});

// BLOCKER
const blocker = (boolean) => {
  alphabetsButtons.forEach((button) => {
    button.disabled = boolean;
  });
};

const gameStatus = (randomWord) => {
  if (randomWord.length >= 3 && randomWord.length == winCount) {
    blocker(true);
    alert("🍭🍭🍭 YOU ARE THE WINNER 🍭🍭🍭");
    confetti({
      particleCount: 700,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 700,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  } else {
    return;
  }
};

// ----- EVENT LISTENER ----- //
newGameButton.addEventListener("click", handleNewGameButtonClick);

startButton.addEventListener("click", handleStartButton);

giveUpButton.addEventListener("click", handleGiveUpButtonClick);

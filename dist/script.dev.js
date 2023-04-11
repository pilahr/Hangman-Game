"use strict";

var _randomWords = _interopRequireDefault(require("./randomWords.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alphabetsString = "abcdefghijklmnopqrstuvwxyz";
var alphabets = alphabetsString.split(""); // ----- GET ELEMENTS ----- //

var startButton = document.querySelector(".overlay__button");
var displayScreen = document.querySelector(".display__letters");
var overlayPage = document.querySelector(".overlay");
var newGameButton = document.querySelector(".gaming-buttons__new-game");
var giveUpButton = document.querySelector(".gaming-buttons__give-up");
var showLives = document.querySelector(".container__lives"); //  ----- FUNCTION ----- //
// INSERT ALPHABETS BUTTONS

var insertLetters = function insertLetters() {
  var alphabetsContainer = document.querySelector(".alphabets");
  alphabets.forEach(function (letter) {
    var letterHtml = "<button>".concat(letter, "</button>");
    alphabetsContainer.innerHTML += letterHtml;
  });
};

insertLetters(); // RANDOM WORD

var randomWord = "";

var getRandomWord = function getRandomWord() {
  randomWord = _randomWords["default"][Math.floor(Math.random() * _randomWords["default"].length)];
  return randomWord;
}; // ADD WORD TO DISPLAY


var addHtmlWord = function addHtmlWord(letter) {
  return "<p data-letter=\"".concat(letter, "\">_</p>");
};

var displayWordArea = function displayWordArea(word) {
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var htmlWord = addHtmlWord(letter);
    displayScreen.innerHTML += htmlWord;
  }
}; // ----- START BUTTON ----- //


var handleStartButton = function handleStartButton(event) {
  overlayPage.style.display = "none";
  getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
  confetti({
    particleCount: 200
  });
  return;
}; // NEW GAME BUTTON


var alphabetsButtons = document.querySelectorAll(".alphabets button");

var handleNewGameButtonClick = function handleNewGameButtonClick(event) {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  alphabetsButtons.forEach(function (button) {
    button.style.backgroundColor = "#fcde67";
  });
  showLives.innerHTML = "";
  totalLives = [1, 2, 3, 4, 5];
  showPlayerLife();
}; // GIVE UP BUTTON


var handleGiveUpButtonClick = function handleGiveUpButtonClick(event) {
  displayScreen.innerHTML = randomWord;
  alert("Here's the answer, let's play another game 😉");
}; // CHECK EXISTING ALPHABET --


var checkExistingAlphabet = function checkExistingAlphabet(letter) {
  var hiddenLetters = document.querySelectorAll(".display__letters p");
  hiddenLetters.forEach(function (hiddenLetter) {
    var hidden = hiddenLetter.innerHTML == "_";
    var letterElement = hiddenLetter.dataset.letter;

    if (hidden && letterElement == letter) {
      hiddenLetter.innerHTML = letter;
      hasLostLife = false;
    }
  });
}; // ALPHABETS BUTTON


alphabetsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
    checkExistingAlphabet(button.innerHTML);
    loseOneLife();
    hasLostLife = true;
  });
}); // LIVES

var hasLostLife = true;
var totalLives = [1, 2, 3, 4, 5];

var showPlayerLife = function showPlayerLife() {
  showLives.innerHTML = "";
  totalLives.forEach(function (life) {
    var htmlLife = "<img src=\"./image/candy.png\" />";
    showLives.innerHTML += htmlLife;
  });
};

var loseOneLife = function loseOneLife() {
  if (hasLostLife) {
    totalLives.pop();
    showPlayerLife();
    hasLostLife = true;
  }
}; //GAME STATUS
// const gameStatus = () => {
//   if (totalLives.length === 0) {
//     alert("GAME OVER!  ❌ NO CANDY 🍭🍭🍭 FOR YOU");
//   } else if (totalLives.length <= 5 && winCount == letter.length) {
//     alert("🍭🍭🍭 YOU ARE THE WINNER 🍭🍭🍭");
//     confetti({
//       particleCount: 700,
//       angle: 60,
//       spread: 55,
//       origin: { x: 0 },
//     });
//     confetti({
//       particleCount: 700,
//       angle: 120,
//       spread: 55,
//       origin: { x: 1 },
//     });
//   }
// };
// ----- EVENT LISTENER ----- //


startButton.addEventListener("click", handleStartButton);
newGameButton.addEventListener("click", handleNewGameButtonClick);
giveUpButton.addEventListener("click", handleGiveUpButtonClick);
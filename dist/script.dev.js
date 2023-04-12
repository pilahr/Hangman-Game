"use strict";

var _randomWords = _interopRequireDefault(require("./randomWords.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alphabetsString = "abcdefghijklmnopqrstuvwxyz";
var alphabets = alphabetsString.split(""); //  ----- FUNCTION ----- //
// INSERT ALPHABETS BUTTONS

var insertLetters = function insertLetters() {
  var alphabetsContainer = document.querySelector(".alphabets");
  alphabets.forEach(function (letter) {
    var letterHtml = "<button>".concat(letter, "</button>");
    alphabetsContainer.innerHTML += letterHtml;
  });
};

insertLetters();
var alphabetsButtons = document.querySelectorAll(".alphabets button"); // RANDOM WORD

var randomWord = "";

var getRandomWord = function getRandomWord() {
  randomWord = _randomWords["default"][Math.floor(Math.random() * _randomWords["default"].length)];
  return randomWord;
}; // ADD WORD TO DISPLAY


var displayScreen = document.querySelector(".display__letters");

var addHtmlWord = function addHtmlWord(letter) {
  return "<p data-letter=\"".concat(letter, "\">_</p>");
};

var displayWordArea = function displayWordArea(word) {
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var htmlWord = addHtmlWord(letter);
    displayScreen.innerHTML += htmlWord;
  }
}; // GAME OVER


var gameOver = function gameOver() {
  if (totalLives.length === 0) {
    alert("GAME OVER!  ❌ NO CANDY 🍭🍭🍭 FOR YOU");
    blocker(true);
  } else {
    return;
  }
}; // LIVES


var hasLostLife = true;
var totalLives = [1, 2, 3, 4, 5];
var showLives = document.querySelector(".container__lives");

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
    gameOver();
  }
}; // ----- START BUTTON ----- //


var startButton = document.querySelector(".overlay__button");
var overlayPage = document.querySelector(".overlay");

var handleStartButton = function handleStartButton(event) {
  overlayPage.style.display = "none";
  getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
  confetti({
    particleCount: 700,
    angle: 60,
    spread: 55,
    origin: {
      x: 0
    }
  });
  confetti({
    particleCount: 700,
    angle: 120,
    spread: 55,
    origin: {
      x: 1
    }
  });
  return;
}; // NEW GAME BUTTON


var newGameButton = document.querySelector(".gaming-buttons__new-game");

var handleNewGameButtonClick = function handleNewGameButtonClick(event) {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  blocker(false);
  alphabetsButtons.forEach(function (button) {
    button.style.backgroundColor = "#fcde67";
  });
  showLives.innerHTML = "";
  totalLives = [1, 2, 3, 4, 5];
  showPlayerLife();
}; // GIVE UP BUTTON


var giveUpButton = document.querySelector(".gaming-buttons__give-up");

var handleGiveUpButtonClick = function handleGiveUpButtonClick(event) {
  displayScreen.innerHTML = randomWord;
  alert("Here's the answer, let's play another game 😉");
  blocker(true);
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
}); // BLOCKER

var blocker = function blocker(_boolean) {
  alphabetsButtons.forEach(function (button) {
    button.disabled = _boolean;
  });
}; // ----- EVENT LISTENER ----- //


newGameButton.addEventListener("click", handleNewGameButtonClick);
startButton.addEventListener("click", handleStartButton);
giveUpButton.addEventListener("click", handleGiveUpButtonClick);
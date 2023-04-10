"use strict";

// import words from "./randomWords";
var words = ["happy", "snake", "communication", "letter", "monitor", "application", "network", "water", "small", "house", "food", "remove"];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // ----- GET ELEMENTS ----- //

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
  randomWord = words[Math.floor(Math.random() * words.length)];
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
  return;
}; // NEW GAME BUTTON


var handleNewGameButtonClick = function handleNewGameButtonClick(event) {
  displayScreen.innerHTML = "";
  randomWord = getRandomWord();
  displayWordArea(randomWord);
  showPlayerLife();
}; // GIVE UP BUTTON


var handleGiveUpButtonClick = function handleGiveUpButtonClick(event) {
  displayScreen.innerHTML = randomWord;
}; // CHECK EXISTING ALPHABET -- not working yet


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


var alphabetsButtons = document.querySelectorAll(".alphabets button");
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
    gameOver();
  }
}; // GAME OVER


var gameOver = function gameOver() {
  if (totalLives.length === 0) {
    alert("GAME OVER! NO CANDY FOR YOU");
  } else {
    return;
  }
}; // ----- EVENT LISTENER ----- //


startButton.addEventListener("click", handleStartButton);
newGameButton.addEventListener("click", handleNewGameButtonClick);
giveUpButton.addEventListener("click", handleGiveUpButtonClick);
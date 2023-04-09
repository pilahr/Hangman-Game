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

const alphabetsContainer = document.querySelectorAll(".alphabets");

const insertLetters = () => {
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

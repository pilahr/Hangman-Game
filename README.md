# Hangman-Game Project

![950338D6-0497-4292-B2B7-1A7AA18F08D8](https://user-images.githubusercontent.com/125895065/231592939-f1add8b7-ecac-428c-83a7-7ba2bd0d4b67.png)

In this project I was tasked to build a game using HTML, SCSS and JavaScript.

1. HTML: I began by creating the layout of this game, named classes with BEM implementation for accessing in SCSS and JavaScript. It has overlay page with the start game button and the main page for gaming area.

2. SCSS: I applied a basic styling of the components, using flex box and grid where necessary. I started building the game from mobile dimension and then applied the media screen for a larger device. The SCSS files were separated to organised the structure of the game.

3. JavaScript: The game's functionality was achieved by utilising some key fundamentals of JavaScript, such as variables, getting HTML element, conditional statements, functions, loops, event listeners and also implemented npm package to use with the confetti effect.

I began with created an Array of the words to use in the game in randomWords.js then imported the variable into the main JavaScript file (script.js). Then I defined a variable that contain a string of the alphabets from a-z, separated them into an array with split method for them to be ready to use as a HTML alphabet buttons.

FUNCTIONS EXPLAINED

    insertLetters:
    This function is for adding the buttons of alphabets a-z to the HTML by looping through the letters in the alphabets array then added them to HTML

    getRandomWord:
    This function is to return a random words from words array to be ready to use in the game.

    addHtmlWord:
    This function is built to add the word to display as a paragraph on HTML later on. The letters in the word will be showed as "_"

    displayWordArea:
    This function is to get the letters of each word, then adding up to the HTML document on the word display area.

    showPlayerLife:
    This function is to set the player's life to 5 lives representing them in a candy images, then added to the HTML.

    loseOneLife:
    This function works with a condition, if the user guess the wrong letter it will remove one life on the screen one at a time. Then when all the lives removed it will trigger the gameOver function.

    gameOver:
    The function comes with the conditional if the player losing all the lives, it will alert the message and activate the blocker to stop user from keep pressing the alphabet buttons.

    handleStartButton:
    Triggered by the event of clicking start button. This function set to disappear the overlay page then get into the actual game page. After that the function to random a word, function that calling the word to display on the screen and the function to show the player's lives will be triggered. There's also a welcoming confetti from npm package appearing.

    handleNewGameButtonClick:
    Triggered by the event of clicking New Game button. The function generates the random word, retrieves the innerHTML of the displayScreen to show the underscores hints of the word, cleared the used alphabet buttons and reset the lives from the previous game.

    handleGiveUpButtonClick:
    Triggered by the event of clicking Give Up button. It will alert the pop-up then show the answer on the screen. It's also has a blocker function to block user from keeping pressing the alphabet buttons.

    checkExistingAlphabet:
    This function is to loop through all the hidden letter that was randomized into the paragraph which is now showing as "_", then compare the word with the inner letter from the dataset. If it's a match, user can keep playing without losing the life.

    Event listener for the alphabet buttons:
    Triggered when the alphabet button was clicked, the button will turn green to let user know that the alphabet was already used, then calls the checkExistingAlphabet function to take the innerHTML for the clicked button then compare with the hidden word. If it doesn't match, one life will be deducted.

    blocker:
    This function takes a boolean as a parameter to loop over all the alphabet buttons. Then disable the use of the button when the boolean is true.

    gameStatus:
    This function will alert the winner with the confetti effect when the time the user guesses the letters right is the same with the length of the word.

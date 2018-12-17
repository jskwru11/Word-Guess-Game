

// variables

let lettersArray = [];
let gameWords = ["thor", "hulk", "antman", "thanos", "drstrange", "ebonyma", "blackwidow", "blackpanther", "captainamerica", "captainmarvel", "spiderman", "ironman"];
// let wordIndex = Math.floor(Math.random() * gameWords.length);
let wordIndex, selectedWord, wordLength, display, win, letters;
// let selectedWord = gameWords[wordIndex];
// let wordLength = selectedWord.length;
// let display = [wordLength];
// let win = wordLength;
// let letters = selectedWord.split('');
let remainingGuess = 10;
let output = "";
let usedLetter = "";
let winCount = 0;
let flag;




// add event listener
window.addEventListener('keypress', onKeyPress);

function ranWord(arr) {
    wordIndex =  Math.floor(Math.random() * arr.length);
    selectedWord = gameWords[wordIndex];
    letters = selectedWord.split("");
    display = [wordLength];
    win = wordLength;
    letters = selectedWord.split('');

    for (var i=0; i < selectedWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("wordLayout").innerHTML = output;
    //clear output
    output = "";

}


// functions
function onKeyPress(event) {
    if (lettersArray.includes(event.key)) {
        console.log("its in there already");
    } else if (letters.includes(event.key)) {
        lettersArray.push(event.key);
        document.getElementById("myArray").innerHTML = lettersArray;
    } else {
        lettersArray.push(event.key);
        document.getElementById("myArray").innerHTML = lettersArray;
        remainingGuess--;
        document.getElementById("guessCount").innerHTML = remainingGuess;
    }
    gameLogic();

    return 1;
}

function startGame() {
    remainingGuess = 10;
    lettersArray = [];
    wordIndex =  Math.floor(Math.random() * gameWords.length);
    selectedWord = gameWords[wordIndex];
    letters = selectedWord.split("");
    display = [wordLength];
    win = wordLength;
    letters = selectedWord.split('');

    for (var i=0; i < selectedWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("wordLayout").innerHTML = output;
    //clear output
    output = "";
    document.getElementById("guessCount").innerHTML = remainingGuess;

    document.getElementById("myArray").innerHTML = '';
    // ranWord(gameWords);

}


//get the index of each letter guessed if it is in the selected word.

let getIndicies = (guess, word) => {
    let indices = [];
    idx = '';
    for (let i=0; i<word.length; i++) {
        idx = i;
        for (let y of guess) {
            if (word[i] == y) {
                indices.push(idx);
                idx++;
            }
        }
    }
    return indices
}

function gameLogic () {
    // reset output
    output = "";
    usedLetter = lettersArray;

    for (let i of getIndicies(usedLetter, letters)) {
        display[i] = letters[i] + " ";

        
    }
    document.getElementById("wordLayout").innerHTML = display.join(" ");
    output = "";
    ifWin();
}

function ifWin() {
    if (document.getElementById("wordLayout").innerHTML.split(" ").join("") === letters.join("") && remainingGuess >= 1) {
        winCount = winCount + 1;
        document.getElementById("winCount").innerHTML = winCount;
        startGame();
        
    } else if (remainingGuess === 0) {
        document.getElementById("messageBanner").innerHTML = "You Lose!!!!";
        flag = confirm("Would you like to play again?");
        if (flag) {
            startGame();
            document.getElementById("messageBanner").innerHTML = "";
            // ranWord(gameWords);
            // reset();
        }
    }
}

function reset() {
    lettersArray = [];
    document.getElementById("myArray").innerHTML = "";
    remainingGuess = 10;
    document.getElementById("guessCount").innerHTML = remainingGuess;
    startGame();
    // ranWord(gameWords);

}

// addevent Listener for button click

document.getElementById("newGameButton").addEventListener('click', buttonClick);


function buttonClick() {
    startGame();
    console.log(`the button click worked`);
}




// load on start

window.onload = () => {
    startGame();
}



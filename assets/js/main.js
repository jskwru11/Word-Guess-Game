

// variables

let lettersArray = [];
let gameWords = ["moon", "stars", "sun", "hot", "cold", "snow", "rain"];
let wordIndex = Math.floor(Math.random() * gameWords.length);
let selectedWord = gameWords[wordIndex];
let wordLength = selectedWord.length;
let display = [wordLength];
let win = wordLength;
let letters = selectedWord.split('');
let remainingGuess = 10;
let output = "";
let usedLetter = "";
let winCount = 0;




// add event listener
window.addEventListener('keypress', onKeyPress);


// functions
function onKeyPress(event) {
    // if(event.code >= 65 || event.code <= 90 || event.code >= 97 || event.code <= 122 ) {
    //     a.push(String.fromCharCode(event.code));
    // }
    lettersArray.push(event.key);
    // console.log(a);
    document.getElementById("myArray").innerHTML = lettersArray;
    gameLogic();


    return 1;
}

function startGame() {
    for (var i=0; i < selectedWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("wordLayout").innerHTML = output;
    //clear output
    output = "";
    document.getElementById("guessCount").innerHTML = remainingGuess;

}

function gameLogic () {
    // reset output
    output = "";
    usedLetter = lettersArray;

    for (var x = 0; x < selectedWord.length; x++) {
        if (usedLetter[x] == letters[x]) {
            display[x] = usedLetter[x];
            win--;
        }
        output = output + display[x] + " ";
    }
    document.getElementById("wordLayout").innerHTML = output;
    output = "";
    remainingGuess--;

    if (win < 1) {
        document.getElementById("winCount").innerHTML = winCount++;
    } else if (remainingGuess < 1) {
        document.getElementById("messageBanner").innerHTML = "You Lose!!!!";
    } else {
        document.getElementById("guessCount").innerHTML = remainingGuess;
    }

}



// load on start

window.onload = () => {
    startGame();
}



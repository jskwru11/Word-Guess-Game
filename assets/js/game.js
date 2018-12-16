

// variables

let lettersArray = [];
let gameWords = ["thor", "hulk", "antman", "thanos", "drstrange", "ebonyma", "blackwidow", "blackpanther", "captainamerica", "captianmarvel", "spiderman", "ironman"];
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
let flag;




// add event listener
window.addEventListener('keypress', onKeyPress);


// functions
function onKeyPress(event) {
    // if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122 ) {
    //     lettersArray.push(event.key);
    //     document.getElementById("myArray").innerHTML = lettersArray;
    // }
    if (lettersArray.includes(event.key)) {
        console.log("its in there already");
    } else {
        lettersArray.push(event.key);
        document.getElementById("myArray").innerHTML = lettersArray;
    }
    gameLogic();

    return 1;
}

function startGame() {
    remainingGuess = 10;
    lettersArray = [];

    for (var i=0; i < selectedWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("wordLayout").innerHTML = output;
    //clear output
    output = "";
    document.getElementById("guessCount").innerHTML = remainingGuess;

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

    // for (var x = 0; x < selectedWord.length; x++) {
    //     if (usedLetter[x] == letters[x]) {
    //         // display[x] = usedLetter[x];
    //         win--;
    //     }
    
    //     output = output + display[x] + " ";
    // }
    // document.getElementById("wordLayout").innerHTML = output;
    // output = "";
    // remainingGuess--;

    for (let i of getIndicies(usedLetter, letters)) {
        display[i] = letters[i] + " ";
    }
    document.getElementById("wordLayout").innerHTML = display.join(" ");
    output = "";
    remainingGuess--;
    document.getElementById("guessCount").innerHTML = remainingGuess;
    ifWin();
    


    // determine a winner!

    // if (win < 1) {
    //     document.getElementById("winCount").innerHTML = winCount++;
    //     // startGame();
    // } else if (remainingGuess < 1) {
    //     document.getElementById("messageBanner").innerHTML = "You Lose!!!!";
    //     // startGame()
    // } else {
    //     document.getElementById("guessCount").innerHTML = remainingGuess;
    // }

}

function ifWin() {
    if (document.getElementById("wordLayout").innerHTML.split(" ").join("") === letters.join("") && remainingGuess >= 1) {
        console.log(document.getElementById("wordLayout").innerHTML)
        winCount = winCount + 1;
        document.getElementById("winCount").innerHTML = winCount;
        reset();
    } else if (remainingGuess === 0) {
        document.getElementById("messageBanner").innerHTML = "You Lose!!!!";
        flag = confirm("Would you like to play again?");
        if (flag) {
            startGame();
            document.getElementById("messageBanner").innerHTML = "";
        }
    }
}

function reset() {
    lettersArray = [];
    document.getElementById("myArray").innerHTML = "";
    remainingGuess = 10;
    document.getElementById("guessCount").innerHTML = remainingGuess;
    startGame();

}




// load on start

window.onload = () => {
    startGame();
}



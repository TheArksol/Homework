// HANGMAN!!!!!

const readlineSync = require("readline-sync");

function replaceCharAt(word, position, char) {
    let subStringLeft = word.substring(0, position);
    let subStringRight = word.substring(position + 1);

    return subStringLeft + char + subStringRight;
}

function isSameBaseCharacter(char, anotherChar) {
    const result = char.localeCompare(anotherChar, "en", {sensitivity: "base"});
    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

const secretPhrase = "Gotham City";
let gamePhrase = "****** ****";
let gameFails = 0;
let roundCheck = false;

while (secretPhrase != gamePhrase && gameFails < 6) {
    roundCheck = false;
    console.clear();
    console.log(updateHangmanASCII(gameFails));
    console.log(gamePhrase);
    console.log("Lives left: " + (6-gameFails));
    console.log("Letter?");
    const userLetter = readlineSync.question("> ");

    for (let i = 0; i < secretPhrase.length; i++) {
        if (isSameBaseCharacter(secretPhrase[i], userLetter)) {
            gamePhrase = replaceCharAt(gamePhrase, i, secretPhrase[i]);
            roundCheck = true;
        }  
    }

    //True = new letter was found and the player wont lose a life.
    if(!roundCheck){
      gameFails++;  
    }
    
}

if(gameFails < 6){
  console.clear();
  console.log(updateHangmanASCII(gameFails));
  console.log("You have won!");
  console.log(gamePhrase);
}else{
  console.clear();
  console.log(updateHangmanASCII(gameFails));
  console.log("You have lost!");
  console.log(secretPhrase + " was the secret word.");
}

// BONUS 1:
// auto-generate gamePhrase from secretPhrase

// BONUS 2:
// adding limited tries to the game (suggestion 6)

// SUPER BONUS:
// Use ASCII ART TO SHOW THE HANGMAN :D
function updateHangmanASCII(n){
 const hangman = ["  +---+  \n  |   |  \n      |  \n      |  \n      |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n      |  \n      |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n  |   |  \n      |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n /|   |  \n      |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n /|\\  |  \n      |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n /|\\  |  \n /    |  \n      |  \n=========",
                  "  +---+  \n  |   |  \n  o   |  \n /|\\  |  \n / \\  |  \n      |  \n========="
                 ]

 return hangman[n];
}

//  "  +---+  \n"
//  "  |   |  \n"
//  "  o   |  \n"
//  " /|\  |  \n"
//  " / \  |  \n"
//  "      |  \n"
//  "========="
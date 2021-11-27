let readlineSync = require("readline-sync");

console.clear();

console.log("What's your name?");
let name = readlineSync.question("> ");
console.log(returnStringBackwards(name));


console.log("Give me a sentence");
let sentence = readlineSync.question("> ");
console.log(returnStringInFrame(sentence));


function returnStringBackwards(string) {
  let stringBackwards = "";

  for (let i = string.length - 1; i >= 0; i--) {

    stringBackwards += string[i];

  }
  return stringBackwards;

}

function returnStringInFrame(string) {

  let stringSplit = string.split(" ");
  let longestWord = stringSplit[0].length;
  let frameContent = "";
  let frame = "****";

  //Find the longest word
  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > longestWord) {
      longestWord = stringSplit[i].length;
    }
  }

  //Generate String to return
   for (let i = 0; i < stringSplit.length; i++) {

    let differenceInLength = longestWord - stringSplit[i].length;
  
    let whiteSpaceDifference = "";
    while (differenceInLength > 0){
      whiteSpaceDifference += " ";
      differenceInLength--;
    }
 
     frameContent += "* " + stringSplit[i] + whiteSpaceDifference + " *\n";
   }


  //Generate the Top and bottom frame part.
  while(longestWord > 0){
    frame += "*"
    longestWord--;
  }

 

  
  return frame + "\n" + frameContent + frame;
}


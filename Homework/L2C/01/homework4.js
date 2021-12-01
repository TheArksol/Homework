let readlineSync = require("readline-sync");

console.clear();

// console.log("Homework 14");
// console.log("Length?");
// let num = readlineSync.question("> ");

// console.log(returnTriangle(num));


// console.log("Homework 15");
// console.log("Height of the tree?");
// num = readlineSync.question("> ");

// console.log(returnChristmasTree(num));

// console.log("Homework 16");
// console.log(returnMultiplies());

// guessingGame();

perfectNumbers();
//BONUS??
///////////////////////////////
// Exercise 14
///////////////////////////////
function returnTriangle(num) {

  let result = "";

  for (let i = 0; i <= num; i++) {

    let line = ""
    for (let j = 0; j < i; j++) {

      line += "*";

    }
    result += line + "\n";

  }

  return result;
}

///////////////////////////////
// Exercise 15
///////////////////////////////
function returnChristmasTree(num) {
  //l i

  //1 0     *          
  //2 1    ***               1
  //3 2   *****              3
  //4 3  *******             5
  //5 4 *********            7
  //        I

  let result = "";
  let stemOffset = "";

  for (let i = 0; i < num; i++) {
    let length = "";
    let offset = "";

    //Tree Line
    for (let j = 0; j < i + i + 1; j++) {
      length += "*";

    }

    //Offset
    for (let j = 0; j < num - i + 1; j++) {
      offset += " ";
    }

    //StemOffset
    if (i == 0) {
      stemOffset = offset;
    }

    //Modify result
    result += "\n" + offset + length + offset;

  }

  result += "\n" + stemOffset + "|" + stemOffset;
  return result;


}

///////////////////////////////
// Exercise 16
///////////////////////////////
function returnMultiplies() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    let line = "";
    for(let j = 1; j <= 10; j++){

      n = i * j;
      let offset = " ";
      if(n < 100){
       offset += " ";
      }

      if(n < 10){
        offset += " ";
      }

      line += offset + n;
    }

    result += line + "\n";

  }

  return result;
   
}

///////////////////////////////
// Exercise 17
///////////////////////////////
function guessingGame(){

  let rng = Math.floor(Math.random() * 100) + 1;
  let tries = 6;

  console.log("RNG: " + rng);
  console.log("Guess a number between 1 and 100");
  while(tries > 0){

    console.log(tries + " tries left.");
    let num = readlineSync.question("> ");
    
    if(num == rng){
      console.log(num + " was correct.");
      return;
    }

    if(num > rng){
      console.log(num + " is too large.");
    }else{
      console.log(num + " is too small.");
    }

    tries--;
  }
  console.log("The correct number was " + rng);
}

///////////////////////////////
// Exercise 18
///////////////////////////////
function perfectNumbers(){
  for(let i = 1; i <= 1000; i++){
    if(isPerfectNumber(i)){
     console.log(i + " is a perfect number.");
    }
  }
  


}

function isPerfectNumber(num){

  let checkNumber = 0;
  for(let i = 1; i < num; i++){

    if(num % i == 0){
      checkNumber += i;
    }

  }

  return checkNumber == num;

}



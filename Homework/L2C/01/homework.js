let readlineSync = require("readline-sync");
let username = "User";

console.clear();
start();

function start() {

  console.log("Please enter your name:");
  username = readlineSync.question("> ");
  console.clear();

  console.log("Hello " + username + "!");
  mainMenu();

}

function mainMenu() {
  console.log("Where you want to go?");
  console.log("");
  console.log("1. Exercise 1 - Input and output");
  console.log("2. Exercise 2 - Format text");
  console.log("3. Exercise 3 - Currency converter");
  console.log("4. Exercise 4 - Sum loop");
  console.log("5. Exercise 5 - Sum loop modified");
  console.log("6. Exercise 6 - Sum loop modifed 2");
  console.log("7. Exercise 7 - Beachwalk Hotel");
  console.log("");

  let route = readlineSync.question("> Number: ");

  console.clear();

  //Switch statement?
  if (route == "1") {
    inputOutput();
  } else if (route == "2") {
    mortelKombat();
  } else if (route == "3") {
    currencyConverter();
  } else if (route == "4") {
    sumLoop();
  } else if (route == "5") {
    sumMod();
  } else if (route == "6") {
    sumMix();
  } else if (route == "7") {
    beackwalkHotel();
  } else {

    console.log("Sorry " + username + " I couldn't understand :(");
    mainMenu();
  }
}

//Exercise 1
function inputOutput() {
  console.log("Didn't I already ask for your name, " + username + " ?! :)");
  returnToMenu();
}

//Exercise 2
function mortelKombat() {
  console.log("");
  console.log("                       _..gggggppppp.._                       ");
  console.log("                  _.gd$$$$$$$$$$$$$$$$$$bp._                  ");
  console.log("               .g$$$$$$P^^^^j$$b^^^^^^T$$$$$$p.               ");
  console.log("            .g$$$P^T$$b    d$P T;       ^^^^T$$$p.            ");
  console.log("          .d$$P^``  ;$;   :$;                ``^T$$b.         ");
  console.log("        .d$$P'      T$b.   T$b                  `T$$b.        ");
  console.log("       d$$P'      .gg$$$$bpd$$$p.d$bpp.           `T$$b       ");
  console.log("      d$$P      .d$$$$$$$$$$$$$$$$$$$$bp.           T$$b      ");
  console.log("     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b     ");
  console.log("    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b    ");
  console.log("   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b   ");
  console.log("  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;  ");
  console.log("  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^^T$$$$P^^T$$$;     '$$$  ");
  console.log(" :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_     ^T$bpd$$$$,     $$$; ");
  console.log(" $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    `T$$$$$$;     :$$$ ");
  console.log(":$$$      :$$$$$$$$$$$$$$P `^^^'     ^T$p.    lb`TP       $$$;");
  console.log(":$$$      $$$$$$$$$$$$$$$               T$$p._;$b         $$$;");
  console.log("$$$;      $$$$$$$$$$$$$$;                `T$$$$:Tb        :$$$");
  console.log("$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$");
  console.log(":$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;");
  console.log(":$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$`^^^' $$$;");
  console.log(" $$$;  `^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$ ");
  console.log(" :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   ^^^  $$$; ");
  console.log("  $$$;       `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b      :$$$  ");
  console.log("  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;  ");
  console.log("   T$$b    _  :$$`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P   ");
  console.log("    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P    ");
  console.log("     T$$b   `^^'  :$$  ^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P     ");
  console.log("      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P      ");
  console.log("       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P       ");
  console.log("        `T$$$p.          d$$$$$$$$$$$$$$$$$$$$$$$$$$P'        ");
  console.log("           `^^^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^^          ");
  console.log("             `^^^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^^^              ");
  console.log("                  `^^^^^^T$$$$$$$$$$P^^^^^^                   ");


  returnToMenu();
}

//Exercise 3
function currencyConverter() {
  console.log("Exercise 3 - Currency converter");
  console.log("");
  console.log("What amount of USD you want to convert to Euro, " + username + " ?");
  let dollar = readlineSync.question("> USD ");
  result = (dollar * 0.8863633).toFixed(2);
  console.log("");
  console.log(dollar + " USD = " + result + "€");

  returnToMenu();
}

//Exercise 4
function sumLoop() {
  console.log("Exercise 4 - Sum loop");
  console.log("");
  console.log("Choose a number " + username + " !");

  let num = readlineSync.question("> ");
  let numCheck = checkStringIsInt(num);

  if (numCheck == true) {

    console.log(calcSum(num));
    console.log("");

  } else {

    console.clear();
    console.log("Thats not a number! Please try again");
    sumLoop();

  }

  returnToMenu();
}

//Exercise 5
function sumMod() {

  console.log("Exercise 5 - Sum loop modified");
  console.log("");
  console.log("Choose a number " + username + " !");
  let num = readlineSync.question("> ");
  let numCheck = Number.isInteger(parseInt(num));

  if (numCheck == true) {
    let sum = 0;
    var result = "Result: ";
    for (let i = 1; i - 1 < num; i++) {

      let mod1 = (i % 3);
      let mod2 = (i % 5);

      if (mod1 == 0 || mod2 == 0) {

        sum = (sum + i);
        if (result == "Result: ") {
          result = result + i;
        } else {
          result = result + " + " + i;
        }
      }
    }

    console.log(result + " = " + sum);
    console.log("");

    returnToMenu();

  } else {
    console.clear();
    console.log("Thats not a number! Please try again");
    sumMod();

  }
}

//Exercise 6
function sumMix() {

  console.log("Exercise 6 - Sum loop modified 2");
  console.log("");
  console.log("Choose a number " + username + " !");
  let num = readlineSync.question("> ");
  let numCheck = checkStringIsInt(num);

  if (numCheck == true) {

    sumMixOption(num);

  } else {
    console.clear();
    console.log("Thats not a number! Please try again");
    sumMix();

  }

}

function sumMixOption(num) {

  console.log("Please Choose an option:");
  console.log("1. Compute the sum of 1 - " + num);
  console.log("2. Compute the product of 1 - " + num);
  console.log("");
  let option = readlineSync.question("> ");

  if (option == "1") {
    console.clear();
    console.log(calcSum(num));
    returnToMenu();

  } else if (option == "2") {
    console.clear();
    console.log(calcProduct(num));
    returnToMenu();
  } else {
    console.clear();
    console.log(option + " is not an option!");
    console.log("");
    sumMixOption(num);

  }


}

//Exercise 7
function beackwalkHotel() {

  console.log("Exercise 7 - Beackwalk Hotel");
  console.log("");

  let guests = beachWalkHotel_CheckGuests();
  let nights = beachWalkHotel_CheckNights();
  let breakfast = beachWalkHotel_CheckBreakfast(guests);
  let room = beachWalkHotel_CheckRoom();
  let roomBase = 0;

  if (room == "1") {
    roomBase = 90;
  } else if (room == "2") {

    roomBase = 120;

  } else if (room == "3") {

    roomBase = 150;

  } 

  //Discount check
  let discount = 0;
  if (nights >= 5) {
    discount = 10;
  }

  if (nights >= 10) {
    discount = 15;
  }

  if (nights >= 15) {
    discount = 20;
  }

  let roomPrice = (nights * roomBase);
  let discountPrice = 0;
  let breakfastPrice = 0;

  if (discount != 0) {
    discountPrice = (roomPrice / 100) * discount;

  }
  
  console.log("");
  console.log("Price for the room: " + roomPrice + "€");
  if (discountPrice != 0) {
    console.log("Discount: -" + discountPrice + "€");

  }

  
  if (breakfast == "1") {
    breakfastPrice = (nights * 10);
    console.log("Breakfast: " + breakfastPrice + "€");
  }

  if (discountPrice != 0 || breakfast == "1") {
    console.log("--------------------------------")
    console.log("Total: " + ((roomPrice - discountPrice) + breakfastPrice) + "€");
    console.log("");
  }


  returnToMenu();
}

function beachWalkHotel_CheckGuests() {

  console.log("Number of guests? (1-2)");
  let guests = readlineSync.question("> ");
  
  while (guests != "1" && guests != "2") {

    console.clear();
    console.log(guests + " is invalid. Please try again");
    console.log("Number of guests? (1-2)");

    guests = readlineSync.question("> ");
  

  }

  return guests;

  
}

function beachWalkHotel_CheckNights() {

  console.log("Number of nights?");
  let nights = readlineSync.question("> ");
  let numCheck = checkStringIsInt(nights);

  while (numCheck == false || parseInt(nights) <= 0) {

    console.clear();
    console.log(nights +" is invalid. Please try again");
    console.log("Number of nights?");
    nights = "";
    nights = readlineSync.question("> ");
    numCheck = checkStringIsInt(nights);
  }

  return nights;
}

function beachWalkHotel_CheckBreakfast(guests) {

  console.log("Include breakfast for how many guests? 0-" + guests);
  
  let breakfast = readlineSync.question("> ");
  let numCheck = checkStringIsInt(breakfast);
  
  while (breakfast > guests || numCheck == false){
    console.clear();
    console.log(breakfast +" is invalid. Please try again");

    console.log("Include breakfast for how many guests? 0-" + guests);

    breakfast = readlineSync.question("> ");
    numCheck = checkStringIsInt(breakfast);
  }
  
  return breakfast;
}

function beachWalkHotel_CheckRoom() {
  console.log("Please choose the room/s ");
  console.log("1. Normal room  - 90€ per night");
  console.log("2. Deluxe room  - 120 per night");
  console.log("3. Deluxe suite - 150 per night");

  let room = readlineSync.question("> ");
  
  while (room != "1" && room != "2" && room != "3"){
    console.clear();
    console.log(room +" is invalid. Please try again");
    
    console.log("Please choose the room/s ");
    console.log("1. Normal room  - 90€ per night");
    console.log("2. Deluxe room  - 120 per night");
    console.log("3. Deluxe suite - 150 per night");

    room = readlineSync.question("> ");
    
  }
  
  return room;
}

function checkStringIsInt(string) {

  //Check for float
  if (string.match(/^\d+$/) != null) {
    // let check = Number.isInteger(parseInt(string));

    // if (check == true && parseInt(string) > 0) {
    //   return true;

    // } else {
    //   return false;
      
    // }
    return true;
  } else {
    return false;

  }



}

function returnToMenu() {

  console.log("");
  console.log("Press Enter to return to the main menu.");
  let num = readlineSync.question("> ");
  console.clear();
  mainMenu();

}

function calcSum(value) {

  let sum = 0;
  let result = "";
  for (let i = 1; i - 1 < value; i++) {

    sum = (sum + i);
    result = (result + i + " + ");

  }
  endresult = result.substr(0, result.length - 3)

  return "Result: " + endresult + " = " + sum;

}

function calcProduct(value) {

  let sum = 1;
  let result = "";
  for (let i = 1; i - 1 < value; i++) {

    sum = (sum * i);
    result = (result + i + " x ");

  }
  endresult = result.substr(0, result.length - 3)

  return "Result: " + endresult + " = " + sum;

}




// function endOfFunction(lastFunction){

//   console.log("");
//   console.log("You want to return to the main menu " + username + " ?");
//   console.log("Or do you want to use this function again?")
//   console.log("1. Return to main menu");
//   console.log("2. Restart this function");
//   let answer = readlineSync.question("> ");

//   if(answer = "1"){
//     console.clear();
//     mainMenu();
//   }
//   if(answer = "2"){
//     console.log ("Okay " + username);
//     console.log("");
//     window[lastFunction]();

//   }

// }
let readlineSync = require("readline-sync");

console.clear();
console.log("");
console.log("");
mainMenu();

function mainMenu() {

  console.log("Please choose:");
  console.log("");
  console.log("1. Rectangle Perimeter");
  console.log("2. Rectangle Area");
  console.log("3. Circle Circumference");
  console.log("4. Circle Area");
  console.log("5. Exit");
  let num = readlineSync.question("> ");
  console.clear();

  // 1. Rectangle Perimeter
  if (num == "1") {

    let length = getNumber("Length");
    let width = getNumber("Width");
    console.log("");
    console.log("Rectangle perimeter:");
    console.log("2 x (" + length + " + " + width + ") = " + rectanglePerimeter(length, width)) ;
    console.log("");
    returnToMainMenu();

    // 2. Rectangle Area
  } else if (num == "2") {

    let length = getNumber("Length");
    let width = getNumber("Width");
    console.log("");
    console.log("Rectangle area:");
    console.log(length + " x " + width + " = " + rectangleArea(length, width)) ;
    console.log("");
    returnToMainMenu();

    // 3. Circle Circumference
  } else if (num == "3") {
    let radius = getNumber("Radius");
    console.log("");
    console.log("Circle circumference");
    console.log("2 x π x " + radius + " = " + circleCircumference(radius));
    console.log("");
    returnToMainMenu();

    // 4. Circle Area
  } else if (num == "4") {
    let radius = getNumber("Radius");
    console.log("");
    console.log("Circle area");
    console.log("π * (" + radius + " * " + radius + ") = " + circleArea(radius));
    console.log("");
    returnToMainMenu();

    // 5. Exit
  } else if (num == "5") {

  } else {
    console.log(num + " is not an option! Please try again")
    console.log("");
    mainMenu();
  }
}

function returnToMainMenu() {
  console.log("Press a button to return to the main menu");
  let n = readlineSync.question("> ");
  console.clear();
  console.log("");
  console.log("");
  mainMenu();
}

function getNumber(valueName) {
  console.log(valueName + ":")
  let n = readlineSync.question("> ");

  while (isNaN(n)) {
    console.log(n + " is not a number! Please try again")
    console.log("");
    console.log(valueName + ":")
    n = readlineSync.question("> ");
  }
  return n;
}

function rectanglePerimeter(length, width) {
  return ((2 * length) + (2 * width));
}

function rectangleArea(length, width) {
  return (length * width);
}

function circleCircumference(radius) {
  return (2 * Math.PI * radius);
}

function circleArea(radius) {
  return (Math.PI * (radius * radius));
}
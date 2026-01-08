// Design a Node.js command-line utility that allows an administrator to interactivety calculate statistics (sum, average, maxvnum) for numencal Input using the Nodejs REPL. The program should demonstrate looping, printing results, and usage of at least one core Node.js module.

import readline from "readline";

// Create readline interface (core Node.js module)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Function to show menu
function showMenu() {
  console.log("\nEnter a number or type:");
  console.log("sum   → Calculate Sum");
  console.log("avg   → Calculate Average");
  console.log("max   → Find Maximum");
  console.log("exit  → Exit program");
}

// Show menu initially
showMenu();

// REPL-style loop
rl.on("line", (input) => {
  const value = input.trim();

  if (!isNaN(value)) {
    // If input is a number
    numbers.push(Number(value));
    console.log("Number added:", value);
  } 
  else if (value === "sum") {
    let sum = 0;
    for (let n of numbers) {
      sum += n;
    }
    console.log("Sum =", sum);
  } 
  else if (value === "avg") {
    let sum = 0;
    for (let n of numbers) {
      sum += n;
    }
    let avg = numbers.length ? sum / numbers.length : 0;
    console.log("Average =", avg);
  } 
  else if (value === "max") {
    let max = numbers.length ? numbers[0] : 0;
    for (let n of numbers) {
      if (n > max) max = n;
    }
    console.log("Maximum =", max);
  } 
  else if (value === "exit") {
    console.log("Exiting program...");
    rl.close();
  } 
  else {
    console.log("Invalid input");
  }

  showMenu();
});

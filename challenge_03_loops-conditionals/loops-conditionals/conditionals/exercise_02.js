/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

/*
Instead of using a structure that follows a logical line, use several independent "if-else-if".
This causes all conditions to be checked one after another, and all blocks that are met are executed, which causes it to fail.
I have changed the last else so that any number greater than or equal to 18 always tells the desired phrase.

Solucion:
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age < 3) {
  console.log("You are in elementary school, kid.");
} else if (age < 13) {
  console.log("Nice, you're a teenager!");
} else (age <= 18) 
  console.log("Most places consider you an adult.");
*/
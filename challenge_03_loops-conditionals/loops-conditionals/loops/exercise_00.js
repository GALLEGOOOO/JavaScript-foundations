/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

// Even
for (let numEven = 16; numEven <= 40; numEven++) {
  if (numEven % 2 === 0) {
    console.log(numEven);
  }
}

// Odd
for (let numOdd = 1; numOdd <= 40; numOdd++) {
  if (numOdd % 2 !== 0) {
    console.log(numOdd);
  }
}

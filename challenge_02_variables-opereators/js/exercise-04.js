/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo");
/*
The && operator checks if the left operand is truthy. 
In this case, true is a truthy value, so it proceeds to the right operand and executes console.log("moo"), 
which logs "moo" to the console.
*/

false && console.log("moo moo?");
/*
The && operator checks if the left operand is truthy. 
In this case, false is a falsy value, so the evaluation stops at the left operand, 
and the right operand (console.log) is not executed. Therefore, "moo moo?" is not logged to the console.
*/

true || console.log("hello friend");
/*
The || (logical OR) operator checks if the left operand is truthy. 
In this case, true is truthy, so there's no need to evaluate the right operand. 
The right operand (console.log) is not executed, so "hello friend" is not logged to the console.
*/

false || console.log("bye friend");
/*
The || operator checks if the left operand is truthy. 
In this case, false is falsy, so it proceeds to evaluate the right operand and executes console.log("bye friend"), 
which logs "bye friend" to the console.
*/

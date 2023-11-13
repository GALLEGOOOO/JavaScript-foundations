/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.
*/

let Moo;
Moo = "Moo!";
console.log(Moo);

const Moo2 = "Moo!";

/*
When you declare a variable using let, you have the freedom to create a variable without giving it an initial value. 
You can assign a value to this variable at a later point in your code.
On the other hand, with const, you are required to assign a value at the time of declaring the variable. 
You cannot declare a const variable without providing it with an initial value. 
If you attempt to assign a value on a separate line, it will result in an error in your code.
Furthermore, once you assign a value to a const variable, you are unable to change that value. 
The variable becomes a constant, which means its value remains unchanging throughout the scope in which it was declared. 
This characteristic makes const a suitable choice when you want to ensure that the value of a variable remains constant after its initialization.
*/

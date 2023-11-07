/* 
    1. Define function 'getTypeOf', which receives a value as a parameter and returns the type of this value.
        Use typeof to check the types for each of the main 5 primitive types (string, number, boolean, null, undefined).
    2. Log the result of any function call.
*/

function getTypeOf(value) {
    return typeof value;
}

console.log(getTypeOf("Hello World"));
console.log(getTypeOf(16));
console.log(getTypeOf(true));
console.log(getTypeOf(null));
console.log(getTypeOf(undefined));

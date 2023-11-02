/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

function getTypeOf(value) {
<<<<<<< HEAD
    return typeof value;
=======
    if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'null') {
        return 'null';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    }
>>>>>>> 09d874d5ddd02f7925acbd8db5ee92216a452024
}

console.log(getTypeOf("Hello World"));
console.log(getTypeOf(16));
console.log(getTypeOf(true));
console.log(getTypeOf(null));
console.log(getTypeOf(undefined));
<<<<<<< HEAD

=======
>>>>>>> 09d874d5ddd02f7925acbd8db5ee92216a452024

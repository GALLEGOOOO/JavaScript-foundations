/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.

*/

let name = "Arnau";

function updateValue(value) {
  name = value;
}

updateValue("Duki");
console.log("Nombre:", name);

updateValue(true);
console.log("Nombre:", name);

updateValue(16);
console.log("Nombre:", name);

/*
Jenny Special Greet
La función tiene un pequeño error.
*/
//Agregué un else
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

console.log(greet("pepe"));

console.log(greet("Johnny"));

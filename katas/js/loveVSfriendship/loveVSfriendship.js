//Escribir una función que retorne el valor de la
//suma de las letras de una palabra, si cada letra
//vale el valor correspondiente a su posición en el afabeto
//a = 1, d = 4, z = 26

//restricciones: entrada = solo letras minúsculas
//no numeros
//nunca vacío

const calcWordValue = (string) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //validar entrada

  try {
    //---Limpieza y validación de entradas
    //Limpiar espacios
    string = string.replace(/\s+/g, "");
    //Valida que la entrada no esté vacía
    if (string.length === 0) {
      return "Error: La entrada no puede estar vacía.";
    }
    if (/\d/.test(string)) {
      return "Error: La entrada no puede contener números.";
    }

    //---Lógica, Calcula el valor de la cadena introducida
    let characterValueSum = 0;

    //Recorre la cadena para obtener la posición de cada
    //caracter y realizar la suma
    for (let i = 0; i < string.length; i++) {
      let wordCharacter = "";

      //Obtiene cada caracter de la cadena
      wordCharacter = string.charAt(i);

      //Obtiene la posición y suma el valor de cada caracter +1
      //a = 0 -> a + 1  = 1 Posición -> z = 26 posición
      characterValueSum += alphabet.indexOf(wordCharacter) + 1;
    }

    return characterValueSum;
  } catch (error) {
    console.error("Error en la función calcWordValue: " + error);
  }
};

console.log(calcWordValue("alvaro")); //69
console.log(calcWordValue("  ")); //54
console.log(calcWordValue("love")); //54
console.log(calcWordValue("lov3")); //54
console.log(calcWordValue("friendship")); //108

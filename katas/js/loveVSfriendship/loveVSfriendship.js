//Escribir una función que retorne el valor de la
//suma de las letras de una palabra, si cada letra
//vale el valor correspondiente a su posición en el afabeto
//a = 1, d = 4, z = 26

//restricciones: entrada = solo letras minúsculas
//no numeros
//nunca vacío

let word = "pepe";

const calcWordValue = () => {
  let wordValue;
  let word = "";
  //validar entrada
  //sacar cada caracter

  let alphabet = [
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

  //recorrer la palabra, sacar cada letra, comparar con la posición en el array
  for (let i = 1; i < word.length; i++) {
    let wordCharacter = "";
    wordCharacter = word[n];
    console.log(wordCharacter);
  }
  //todo sacar letras y comparar posición
  //asignar valor a cada caracter

  //sumarlos
  //retornar resultado
  return worlValue;
};

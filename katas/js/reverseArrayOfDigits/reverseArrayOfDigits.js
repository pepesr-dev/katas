/**
 * Recibe un número y almacena sus dígitos en un
 * array en sentido inverso.
 * @param {*} num Número introducido por el usuario
 * @returns string
 */
const reverseArrayOfDigits = (num) => {
  //Convierte el número en un string
  let string = "";
  string = num.toString();

  let reverseArrayOfDigits = [];

  //Recorre el string y saca cada caracter
  for (let n = 0; n < string.length; n++) {
    let character;
    let dígito;

    //Almacena cada caracter
    character = string.charAt(n);

    //Almacena los dígitos en sentido inverso
    reverseArrayOfDigits.unshift(Number(character));
  }

  //Retorna el array invertido
  return reverseArrayOfDigits;
};

//Ejecuta
console.log(reverseArrayOfDigits(35231));
console.log(reverseArrayOfDigits(0));

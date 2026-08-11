/**
 * Compara 2 numeros en función de si son pares o
 * impares en caso de coincidencia retorna que
 * están enamorados
 * @param {*} a
 * @param {*} b
 * @returns string
 */
const oppositeAttraction = (a, b) => {
  //Identificar numeros pares en impares
  let modA = a % 2;
  let modB = b % 2;

  //Si coinciden los resultados retornará que se encuentran enamorados
  if (modA == modB) {
    return "Estáis enamorados";
  } else {
    return "No estáis enamorados";
  }
};

//Ejecuta la función
console.log(oppositeAttraction(2, 2));

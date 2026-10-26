/**
 * Calcula la cantidad de ceros al final del factorial de un número
 * @param base - Base numérica (10 ó 16)
 * @param num - Numero entero al cual se le aplicará el calculo
 * @returns Número de ceros al final o mensaje de error
 */
export const zeroes = (base: number, num: number): Number | string => {
  let zeroes = 0;
  //Validación de entradas
  if (
    Number.isNaN(base) ||
    typeof base !== "number" ||
    Number.isNaN(num) ||
    typeof num !== "number"
  ) {
    return "Error: La base debe ser (10 ó 16) y num solo admite numeros";
  }
  //Interruptor
  switch (base) {
    //Base 10
    case 10:
      while (num >= 5) {
        num = Math.floor(num / 5);
        zeroes += num;
      }
      return zeroes;
      break;
    //Base 16
    case 16:
      let factoresDeDos = 0;
      let divisor = 2;
      while (num >= divisor) {
        factoresDeDos += Math.floor(num / divisor);
        divisor *= 2;
      }
      //Cada 4 factores 2 se forma un 16 (es decir suma un cero)
      zeroes = Math.floor(factoresDeDos / 4);
      return zeroes;
      break;
    default:
      return 0;
  }
};

console.log(zeroes(10, 25));
//6
console.log(zeroes(10, 100));
//24
console.log(zeroes(16, 32));
//7
console.log(zeroes(16, 5434));
//1355
console.log(zeroes(12, "fdfs"));
//Error: La base debe ser (10 ó 16) y num solo admite numeros
console.log(zeroes("fdfs", 32));
//Error: La base debe ser (10 ó 16) y num solo admite numeros

//console.log(zeroes(40, 10));

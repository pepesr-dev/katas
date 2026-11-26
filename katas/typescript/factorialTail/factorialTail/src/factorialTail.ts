/**
 * Calcula la cantidad de ceros al final del factorial de un número en una base dada.
 * @param base - Base numérica (entero entre 2 y 256)
 * @param num - Número entero al cual se le aplicará el cálculo (entre 1 y 1'000'000)
 * @returns Número de ceros al final o mensaje de error
 */
export const zeroes = (base: number, num: number): Number | string => {
  // Validación de tipos y rangos
  if (
    typeof base !== "number" ||
    typeof num !== "number" ||
    !Number.isInteger(base) ||
    !Number.isInteger(num) ||
    base < 2 ||
    base > 256 ||
    num < 1 ||
    num > 1_000_000
  ) {
    return "Error: base debe ser un entero entre 2 y 256 y num un entero entre 1 y 1'000'000";
  }

  // Saca los primos de la base
  const primos: number[] = [];
  let restante = base;
  let divisor = 2;

  while (divisor * divisor <= restante) {
    while (restante % divisor === 0) {
      primos.push(divisor);
      restante /= divisor;
    }
    divisor++;
  }
  if (restante > 1) primos.push(restante);

  //Saca los primos de num y calcula la cantidad de ceros al final
  let minCeros = num;

  for (const primo of primos) {
    let totalPrimo = 0;
    let actual = num;

    while (actual >= primo) {
      actual = Math.floor(actual / primo);
      totalPrimo += actual;
    }

    const repeticionesEnBase = primos.filter((p) => p === primo).length;
    const cerosPosibles = Math.floor(totalPrimo / repeticionesEnBase);

    if (cerosPosibles < minCeros) minCeros = cerosPosibles;
  }

  return minCeros;
};

console.log(zeroes(10, 25));
//6
console.log(zeroes(10, 100));
//24
console.log(zeroes(16, 32));
//7
console.log(zeroes(16, 5434));
//1355
//console.log(zeroes(12, "fdfs"));
//Error: La base debe ser (10 ó 16) y num solo admite numeros
//console.log(zeroes("fdfs", 32));
//Error: La base debe ser (10 ó 16) y num solo admite numeros

//console.log(zeroes(40, 10));

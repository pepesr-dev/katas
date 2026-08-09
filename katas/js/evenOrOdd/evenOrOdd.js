/**
 * Determina si un número entero es par o impar
 * @param {number} num - El número entero a evaluar
 * @returns {string} Devuelve par o impar
 */
function evenOrOdd(num) {
  return num % 2 === 0 ? "Par" : "Impar";
}

console.log("El número introducido es, ¿par o impar?");
console.log("20 es " + evenOrOdd(20));
console.log("21 es " + evenOrOdd(21));
console.log("-1 es " + evenOrOdd(-1));
//Exportar la función
module.exports = evenOrOdd;

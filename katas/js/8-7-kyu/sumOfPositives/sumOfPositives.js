/**
 * Devuelve la suma de los números positivos contenidos en el array
 * @param {number[]} arr - Array de números
 * @returns {number} Devuelve la suma de los números positivos
 */
function sumOfPositives(arr) {
  let total = 0;
  //Saca los números positivos del array y los suma
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      total += arr[i];
    }
  }

  return total;
}

console.log(sumOfPositives([0, 1, 2]));
console.log(sumOfPositives([1, -4, 7, 12]));
console.log(sumOfPositives([-5, -10]));
module.exports = sumOfPositives;

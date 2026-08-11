/*
Programa que retorna el tiempo que ha pasado desde
la medianoche en milisegundos.

TODO finalizarlo con interfaz y demás
* convertirlo en una librería de manejo de horas?

*/

//Datos de entrada
let hours = 0;
let minutes = 1;
let seconds = 1;

/**
 * Calcula el tiempo que pasó desde la media noche
 * @param {*} hours
 * @param {*} minutes
 * @param {*} seconds
 * @returns
 */
const timeSinceMidnight = (hours, minutes, seconds) => {
  let results;

  try {
    //Valida
    if (
      hours >= 0 &&
      hours < 23 &&
      minutes >= 0 &&
      seconds < 59 &&
      seconds >= 0 &&
      seconds < 59
    ) {
      //Convierte a milisegundos
      hours = hours * 3600000;
      minutes = minutes * 60000;
      seconds = seconds * 1000;

      //Total de milisegundos
      results = hours + minutes + seconds;

      return results + " ms";
    } else {
      console.log("Introduzca datos correctos");
      return null;
    }
  } catch (e) {
    console.error(
      "Error en la función tiempoPasadoDesdeLaMediaNoche: " + e.message,
    );
  }
};

//Ejecuta la función
console.log(
  "Han pasado " + timeSinceMidnight(0, 1, 1) + " desde la medianoche",
);

/*
Programa que retorna el el tiempo que ha pasado desde
la medianoche en milisegundos.

TODO finalizarlo con interfaz y demás
* convertirlo en una librería de manejo de horas?

*/

let horas = 0;
let minutos = 1;
let segundos = 1;

//Constante que almacena una función
const tiempoPasadoDesdeLaMedianoche = (horas, minutos, segundos) => {
  let resultado;

  try {
    if (
      horas >= 0 &&
      horas < 23 &&
      minutos >= 0 &&
      segundos < 59 &&
      segundos >= 0 &&
      segundos < 59
    ) {
      //Paso todo a milisegundos
      horas = horas * 3600000;
      minutos = minutos * 60000;
      segundos = segundos * 1000;

      resultado = horas + minutos + segundos;

      return resultado + " ms";
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

//Ejecutar función
console.log(tiempoPasadoDesdeLaMedianoche(0, 1, 1));

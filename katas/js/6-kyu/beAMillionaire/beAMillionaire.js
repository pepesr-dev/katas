//Who Wants to Be a Millionaire?

let correctAnswer = [];
let playerActions = [];

correctAnswer = [
  "a",
  "b",
  "c",
  "d",
  "b",
  "c",
  "d",
  "b",
  "c",
  "a",
  "b",
  "d",
  "a",
  "b",
  "c",
];
/* 15 aciertos
playerActions = [
  "a",
  "b",
  "c",
  "d",
  "b",
  "c",
  "d",
  "b",
  "c",
  "a",
  "b",
  "d",
  "a",
  "b",
  "c",
];
*/

//14 Aciertos
playerActions = [
  "d",
  "b",
  "c",
  "d",
  "b",
  "c",
  "d",
  "b",
  "c",
  "a",
  "b",
  "d",
  "a",
  "b",
  "c",
];

//Colección de premios
let prizeFund = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500,
];

let correctAnswersAmount = 0;
let totalCash = 0;

//Si compara las acciones del jugador con las
//soluciones y devuelve la cantidad de aciertos
for (let i = 0; i < 15; i++) {
  if (correctAnswer[i] == playerActions[i]) {
    correctAnswersAmount = correctAnswersAmount + 1;
  }
}

//Almacena el total de dinero acumulado por respuesta acertada
totalCash = prizeFund[correctAnswersAmount - 1];

//Si todas las respuestas son correctas, aumenta el bote
if (totalCash == prizeFund[14]) {
  totalCash = 2000;
}

//Salida por pantalla
console.log(
  "Respuestas correctas = " +
    correctAnswersAmount +
    ", el premio acumulado es: " +
    totalCash +
    "€",
);
//*Función: calcula el premio acumulado
//Compara las acciones correctas del usuario y
//devuelve el premio acumulado

//TODO:Romper en caso de que el usuario decida salir

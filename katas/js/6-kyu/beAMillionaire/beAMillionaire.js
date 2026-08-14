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
  "d",
  "d",
  "b",
  "a",
  "d",
  "b",
  "c",
  "a",
  "b",
  "w",
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
let isRunAway = "";
let isStop = "";
let gameOver = 0;
//Si compara las acciones del jugador con las
//soluciones y devuelve la cantidad de aciertos
//si encuentra una w, termina el test
for (
  let i = 0;
  i < 15 && playerActions[i] != "w" && playerActions[i] != "x";
  i++
) {
  //*Muestra comparación
  console.log(playerActions[i] + correctAnswer[i]);

  if (correctAnswer[i] == playerActions[i]) {
    correctAnswersAmount = correctAnswersAmount + 1;
  }
  if (playerActions[i + 1] == "w" || playerActions[i + 1] == "x") {
    gameOver = playerActions[i + 1];
  }
}
//console.log(isRunAway);
//console.log(isStop);

//Almacena el total de dinero acumulado por respuesta acertada
totalCash = prizeFund[correctAnswersAmount - 1];

if (gameOver) {
  isStop = gameOver;
  isRunAway = gameOver;

  if ((isRunAway = "w")) {
    console.log("Juego abandonado, dinero ganado:" + totalCash);
  }

  if ((isStop = "x")) {
    console.log("is stop 2; " + isStop);
    console.log("Juego parado, dinero ganado:" + totalCash);
  }
}

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

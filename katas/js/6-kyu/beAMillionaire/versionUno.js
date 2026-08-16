let correctAnswersAmount = 0;
let incorrectAnswersAmount = 0;
let totalCash = 0;
let isRunAway = "";
let isStop = "";
let gameOver = 0;
let firstIncorrectAnswer = 0;

//Si compara las acciones del jugador con las
//soluciones y devuelve la cantidad de aciertos
//si encuentra una w, termina el test
for (
  let i = 0;
  i < 15 &&
  playerActions[i] != "w" &&
  playerActions[i] != "x" &&
  playerActions[i] != undefined;
  i++
) {
  //*Muestra comparación
  console.log(playerActions[i] + correctAnswer[i]);

  //Contador de respuestas correctas
  if (correctAnswer[i] == playerActions[i]) {
    correctAnswersAmount = correctAnswersAmount + 1;
  }

  if (correctAnswer[i] != playerActions[i]) {
    incorrectAnswersAmount = incorrectAnswersAmount + 1;

    if (incorrectAnswersAmount == 1) {
      firstIncorrectAnswer = i;
    }
  }

  //---Buscador de acciones de abandono y parada
  if (playerActions[i + 1] == "w" || playerActions[i + 1] == "x") {
    gameOver = playerActions[i + 1];
  }
}
//busco el primer error
for (let j = 0; i < firstIncorrectAnswer; i++) {
  console.log();
}

//---Control de ninguna respuesta acertada
//Almacena el total de dinero acumulado por respuesta acertada
if (correctAnswersAmount > 0) {
  totalCash = prizeFund[correctAnswersAmount - 1];
} else {
  totalCash = 0;
}

//------Control de acciones de abandono y parada
if (gameOver) {
  isStop = gameOver;
  isRunAway = gameOver;

  //w = Huir con lo recolectado, antes de leer la pregunta
  if (isRunAway === "w") {
    console.log("Juego abandonado, dinero ganado:" + totalCash);
  }

  if (isStop === "x") {
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

//Who Wants to Be a Millionaire?

let correctAnswer = [];
let playerActions = [];
let prizeFund = [];

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

//Colección de 15 premios
prizeFund = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

//15 aciertos
playerActions = [
  "a",
  "b",
  "2c",
  "d",
  "w",
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

//14 Aciertos
/*
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
*/

/*fail 
playerActions = ["a", "b", "d", "d", "d", "a"];
*/

/**
 *
 * @param {Array} prizeFund
 * @param {Array} correctAnswers
 * @param {Array} playerActions
 * @returns {number}
 */
function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let total = 0;
  let playerAnswers = [];
  let wastedLifeLines = [];
  let output = [];

  //*Limpiar numeros
  playerAnswers = playerActions.map((action) => action.replace(/\d/g, ""));

  wastedLifeLines = playerActions.map((action) => action.replace(/\D/g, ""));

  //*CAMINO FELIZ
  //playerActions solo contiene respuestas
  //*correctas e incorrectas
  for (
    let i = 0;
    i < playerAnswers.length &&
    playerAnswers[i] == correctAnswer[i] &&
    playerActions != "x" &&
    playerActions != "w";
    i++
  ) {
    //Obtiene el premio correspondiente
    total = prizeFund[i];

    //*Busco el punto seguro
    if (playerActions[i + 1] == "x") {
      total = prizeFund[i];
    }
  }

  //total = 2000;

  let totalWastedLifeLines = 0;

  totalWastedLifeLines = wastedLifeLines.join("").length;
  output = [total, totalWastedLifeLines];
  return output;
}
console.log(getTotalCashPrize(prizeFund, correctAnswer, playerActions));

//TODO continuar análisis de acciones del usuario

module.exports = getTotalCashPrize;

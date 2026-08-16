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
  let wastedLifeLines = 0;
  let output = [];

  for (let i = 0; i < playerActions.length; i++) {}

  total = 2000;
  wastedLifeLines = 3;
  output = [total, wastedLifeLines];
  return output;
}
console.log(getTotalCashPrize(prizeFund, correctAnswer, playerActions));

//TODO continuar análisis de acciones del usuario

module.exports = getTotalCashPrize;

//Completado al 100%

//Who Wants to Be a Millionaire?

let correctAnswers = [];
let playerActions = [];
let prizeFund = [];
correctAnswers = [
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

//Colección de 15 premios
prizeFund = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

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

/**
 *
 * @param {Array} prizeFund
 * @param {Array} correctAnswers
 * @param {Array} playerActions
 * @returns {Array} [totalCashPrize, totalLifelinesUsed]
 */
function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let total = 0;
  let safeHaven = 0;
  let totalWastedLifeLines = 0;

  for (let i = 0; i < playerActions.length; i++) {
    //Obtiene acción por acción
    const action = playerActions[i];

    //Obtiene los comodines
    const digits = action.replace(/\D/g, "");
    //Obtiene el total de comodines usados
    totalWastedLifeLines += digits.length;

    //Obtiene las respuestas en mayusculas
    const decision = action.replace(/\d/g, "").toUpperCase();

    //Evalua las decisiones
    if (decision === "W") {
      // Se retira antes de la pregunta -> se lleva el acumulado actual
      return [total, totalWastedLifeLines];
    }

    if (decision === "X") {
      // Se retira tras ver la pregunta -> cae al Safe Haven
      return [safeHaven, totalWastedLifeLines];
    }

    if (decision === correctAnswers[i].toUpperCase()) {
      // Respuesta correcta -> acumula el premio
      total += prizeFund[i];

      // Actualizar Safe Haven en preguntas 5, 10 y 15 (índices 4, 9, 14)
      if (i === 4 || i === 9 || i === 14) {
        safeHaven = total;
      }
    } else {
      // Respuesta incorrecta -> pierde todo ($0)
      return [0, totalWastedLifeLines];
    }
  }

  return [total, totalWastedLifeLines];
}
console.log(getTotalCashPrize(prizeFund, correctAnswers, playerActions));

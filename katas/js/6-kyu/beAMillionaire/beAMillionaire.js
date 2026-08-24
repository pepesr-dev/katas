//Who Wants to Be a Millionaire?

/**
 *
 * @param {Array} prizeFund - Lista de premios (se acumulan)
 * @param {Array} correctAnswers - Plantilla de respuestas correctas
 * @param {Array} playerActions - Acciones del jugador
 * @returns {Array} [totalCashPrize, wastedLifeLines]
 */
function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let totalCashPrize = 0;
  let wastedLifeLines = 0;
  let safeHaven = 0;
  let i = 0;

  //Recorre las acciones del jugador
  for (i; i < playerActions.length; i++) {
    //Extrae la primera acción
    /**
     * @type {string}
     */
    const action = playerActions[i];
    //->a
    /**
     * @type {string}
     */
    const digits = action.replace(/\D/g, "");
    //->123
    /**
     * @type {string}
     */
    wastedLifeLines += digits.length;
    /**
     * @type {string}
     */
    const decision = action.replace(/\d/g, "").toUpperCase();
    //->A

    //w
    //x
    //saveHaven

    //Acumula el premio y reduce a 0 si la
    // respuesta es incorrecta
    if (decision == correctAnswers[i]) {
      //->D
      totalCashPrize += prizeFund[i];
    } else {
      return [0, wastedLifeLines];
    }
  }

  return [totalCashPrize, wastedLifeLines];
}

correctAnswers = [
  "A",
  "B",
  "B",
  "D",
  "B",
  "C",
  "A",
  "A",
  "B",
  "D",
  "D",
  "D",
  "B",
  "C",
  "B",
];

//Colección de 15 premios
prizeFund = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

playerActions = [
  "1A",
  "23B",
  "B",
  "D",
  "B",
  "C",
  "A",
  "A",
  "B",
  "D",
  "D",
  "D",
  "B",
  "C",
  "B",
];

console.log(getTotalCashPrize(prizeFund, correctAnswers, playerActions));

//->Acumula correctas

module.exports = getTotalCashPrize;

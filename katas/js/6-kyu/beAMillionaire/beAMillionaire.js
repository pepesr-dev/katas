/**
 * @file beAMillionaire.js
 * @description Solución para la Kata de Codewars "¿Quién quiere ser millonario?".
 * @author pepesr-dev <https://github.com/pepesr-dev>
 */
/**
 * Calcula el premio total que recibe un jugador tras
 * participar en el juego.
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
     * Almacena la acción realizada en cada ronda
     * @type {string}
     */
    const action = playerActions[i];

    /**
     * Almacena los comodines encontrados
     * @type {string}
     */
    const digits = action.replace(/\D/g, "");

    /**
     * Acumula los comodines usados
     * @type {string}
     */
    wastedLifeLines += digits.length;
    /**
     * @type {string}
     */
    const decision = action.replace(/\d/g, "").toUpperCase();

    //Termina el juego y recibe lo acumulado hasta el momento
    if (decision == "W") {
      return [totalCashPrize, wastedLifeLines];
    }
    //Termina el juego y recibe lo acumulado hasta el saveHaven
    if (decision == "X") {
      return [safeHaven, wastedLifeLines];
    }

    //Acumula el premio y reduce a 0 si la
    // respuesta es incorrecta
    if (decision == correctAnswers[i]) {
      totalCashPrize += prizeFund[i];
    } else {
      return [0, wastedLifeLines];
    }
    //Actualiza el save haven
    if (i == 4 || i == 9) {
      safeHaven = totalCashPrize;
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
  "A",
  "B",
  "B",
  "D",
  "B",
  "C",
  "X",
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

module.exports = getTotalCashPrize;

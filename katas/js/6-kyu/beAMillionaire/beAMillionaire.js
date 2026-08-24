//Who Wants to Be a Millionaire?

/**
 *
 * @param {Array} prizeFund
 * @param {Array} correctAnswers
 * @param {Array} playerActions
 * @returns {Array} [totalCashPrize, wastedLifeLines] || [0, wastedLifeLines]
 */
function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let totalCashPrize = 0;
  let wastedLifeLines = 0;
  let i = 0;
  for (i; i < playerActions.length; i++) {
    const action = playerActions[i];
    const digits = action.replace(/\D/g, "");

    wastedLifeLines += digits.length;
    const decision = action.replace(/\d/g, "").toUpperCase();

    if (decision == correctAnswers[i]) {
      totalCashPrize += prizeFund[i];
    } else {
      return [0, wastedLifeLines];
    }
  }

  return [totalCashPrize, wastedLifeLines];
}

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

getTotalCashPrize(prizeFund, correctAnswers, playerActions);

module.exports = getTotalCashPrize;

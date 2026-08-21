const getTotalCashPrize = require("./beAMillionaire");

const originalPrizeFund = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];
const exampleCorrectAnswers = [
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

describe("Función getTotalCashPrize", () => {
  test("Debe comprobar que la función funciona", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["A", "B", "B"];
    const expected = [600, 0];

    expect(getTotalCashPrize(prizeFund, correctAnswers, playerActions)).toBe(
      expected,
    );
  });
});

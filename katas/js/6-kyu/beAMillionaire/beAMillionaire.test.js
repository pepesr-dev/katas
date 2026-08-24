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
  test("Comprueba que obtiene premios", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["A"];
    const expected = [100, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  //Prueba de derrora
  test("Comprueba que una respuesta incorrecta termina el juego", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["D", "B"];
    const expected = [0, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
  test("Comprueba que acumulan todos los premios", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = [
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
    const expected = [2003100, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  //ACUMULAR COMODINES
  test("Debe comprobar que acumula un solo comodin", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["1A"];
    const expected = [100, 1];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
  test("Debe comprobar que acumula comodines en diferentes preguntas", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["1A", "23B"];
    const expected = [300, 3];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
  test("Debe comprobar que se acumulan todos los comodines", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["123A"];
    const expected = [100, 3];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
});

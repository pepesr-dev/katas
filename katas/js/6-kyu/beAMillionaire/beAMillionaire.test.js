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
  test("Comprueba que acumula un solo comodin", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["1A"];
    const expected = [100, 1];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
  test("Comprueba que se acumulan comodines en diferentes preguntas", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["1A", "23B"];
    const expected = [300, 3];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  test("Comprueba que se acumulan todos los comodines", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["123A"];
    const expected = [100, 3];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  //Comprobar funciones W, X, saveHaven

  test("Comprueba que la acción W, termina el juego y el jugador recibe lo acumulado", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["1A", "23B", "w"];
    const expected = [300, 3];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  //Comprueba saveHaven y X
  test("Comprueba que la acción X, termina el juego y el jugador recibe la cantidad correspondiente al saveHaven 5", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = ["A", "B", "B", "D", "B", "X"];
    const expected = [2100, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  test("Comprueba que la acción X, termina el juego y el jugador recibe la cantidad correspondiente al saveHaven 10", () => {
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
      "X",
    ];
    const expected = [64100, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });

  //Tests adicionales fallados en codewars
  test("Comprueba que acciona x en la 7 pregunta, y recibe lo acumulado en el saveHaven ", () => {
    const prizeFund = originalPrizeFund;
    const correctAnswers = exampleCorrectAnswers;
    const playerActions = [
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
    const expected = [2100, 0];

    expect(
      getTotalCashPrize(prizeFund, correctAnswers, playerActions),
    ).toStrictEqual(expected);
  });
});

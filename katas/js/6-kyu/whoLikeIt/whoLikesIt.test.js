const likes = require("./whoLikesIt");

describe("Función likes", () => {
  test("Comprueba que muestra un mensaje", () => {
    const NAMES = ["Pepe"];
    const EXPECTED = "Pepe likes this";
    expect(likes(NAMES)).toStrictEqual(EXPECTED);
  });
  test("Comprueba que a nadie le gusta", () => {
    const NAMES = [];
    const EXPECTED = "no one likes this";
    expect(likes(NAMES)).toStrictEqual(EXPECTED);
  });
  test("Comprueba que le gusta a 3 personas", () => {
    const NAMES = ["Pepe", "Lenia", "María"];
    const EXPECTED = "Pepe, Lenia and María like this";
    expect(likes(NAMES)).toStrictEqual(EXPECTED);
  });
  test("Comprueba que le gusta a 4 personas", () => {
    const NAMES = ["Pepe", "Lenia", "María", "Daniel"];
    const EXPECTED = "Pepe, Lenia and 2 others like this";
    expect(likes(NAMES)).toStrictEqual(EXPECTED);
  });

  test("Comprueba que le gusta más de 3 personas", () => {
    const NAMES = [
      "Pepe",
      "Lenia",
      "María",
      "Daniel",
      "Alvaro",
      "Lorena",
      "Miguel",
    ];
    const EXPECTED = "Pepe, Lenia and 5 others like this";
    expect(likes(NAMES)).toStrictEqual(EXPECTED);
  });
});

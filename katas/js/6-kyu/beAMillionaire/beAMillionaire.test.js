const getTotalCashPrize = require("./beAMillionaire");

describe("Función getTotalCashPrize", () => {
  test("Debe comprobar que la función falla", () => {
    expect(
      getTotalCashPrize(
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
      ),
    ).toBe(1);
  });

  test("Debe comprobar que la función funciona", () => {
    expect(
      getTotalCashPrize(
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
      ),
    ).toBe(0);
  });

  /*
    test("Debe comprobar que 0 es un número par y devolver Even", () => {
    expect(getTotalCashPrize(0)).toBe("Even");
  });
  test("Debe comprobar que 1 es un número impar y devolver Odd", () => {
    expect(getTotalCashPrize(1)).toBe("Odd");
  });
  test("Debe comprobar que -1 es un número impar y devolver Odd", () => {
    expect(getTotalCashPrize(-1)).toBe("Odd");
  });
*/
});

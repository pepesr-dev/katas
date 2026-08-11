const sumOfPositives = require("./sumOfPositives");

describe("Función sumOfPositives", () => {
  test("Debe comprobar que recibe un array [0,1,2] y devuelve 3", () => {
    expect(sumOfPositives([0, 1, 2])).toBe(3);
  });
  test("Debe comprobar que recibe un array [1, -4, 7, 12] y devuelve 20", () => {
    expect(sumOfPositives([1, -4, 7, 12])).toBe(20);
  });
  //Números negativos devuelven 0 por defecto
  test("Debe comprobar que recibe un array [-5,-10] y devuelve 0", () => {
    expect(sumOfPositives([-5, -10])).toBe(0);
  });
});

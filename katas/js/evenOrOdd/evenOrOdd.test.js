//Importa la función
const evenOrOdd = require("./evenOrOdd");

//Conjunto de casos de prueba
describe("Función evenOrOdd", () => {
  test("Debe comprobar que 0 es un número par y devolver Even", () => {
    expect(evenOrOdd(0)).toBe("Even");
  });
  test("Debe comprobar que 1 es un número impar y devolver Odd", () => {
    expect(evenOrOdd(1)).toBe("Odd");
  });
  test("Debe comprobar que -1 es un número impar y devolver Odd", () => {
    expect(evenOrOdd(-1)).toBe("Odd");
  });
});

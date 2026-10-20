import { zeroes } from "./factorialTail.js";
describe("Función zeroes", () => {
  test("Comprueba que la función existe", () => {
    expect(zeroes(10, 25)).toBe(25);
  });
  test("Comprueba que la función funciona en base 10", () => {
    expect(zeroes(10, 25)).toBe(6);
  });
  /*
  test("Comprueba que la función funciona en base 16", () => {
    expect(zeroes(16, 25)).toBe(6);
  });
  */
});

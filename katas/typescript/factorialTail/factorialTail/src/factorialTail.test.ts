import { zeroes } from "./factorialTail.js";
describe("Función zeroes", () => {
  test("Comprueba que la función existe", () => {
    expect(zeroes(10, 25)).toBe(6);
  });
  test("Comprueba que si la base no es 10 ó 16 devuelve el estodo por defecto", () => {
    expect(zeroes(13, 23)).toBe(0);
  });
  test("Comprueba que la función funciona en base 10", () => {
    expect(zeroes(10, 25)).toBe(6);
  });

  test("Comprueba que la función funciona en base 16", () => {
    expect(zeroes(16, 32)).toBe(7);
  });

  test("Devuelve un error si el usuario no introduce numeros en la base", () => {
    expect(zeroes("fds", 32)).toBe(
      "Error: La base debe ser (10 ó 16) y num solo admite numeros",
    );
  });
  test("Devuelve un error si el usuario no introduce numeros en num", () => {
    expect(zeroes(16, "fds")).toBe(
      "Error: La base debe ser (10 ó 16) y num solo admite numeros",
    );
  });
});

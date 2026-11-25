import { zeroes } from "./factorialTail.js";

const ERROR_MSG =
  "Error: base debe ser un entero entre 2 y 256 y num un entero entre 1 y 1'000'000";

describe("Función zeroes", () => {
  test("Calcula los ceros finales en base 10", () => {
    expect(zeroes(10, 25)).toBe(6);
    expect(zeroes(10, 100)).toBe(24);
  });

  test("Calcula los ceros finales en base 16", () => {
    expect(zeroes(16, 32)).toBe(7);
  });

  test("Calcula los ceros finales en bases válidas entre 2 y 256", () => {
    expect(zeroes(13, 23)).toBe(1);
    expect(zeroes(48, 32)).toBe(7);
  });

  test("Devuelve error si base o num no son números válidos", () => {
    // @ts-expect-error Probando entrada no numérica en base
    expect(zeroes("fds", 32)).toBe(ERROR_MSG);
    // @ts-expect-error Probando entrada no numérica en num
    expect(zeroes(16, "fds")).toBe(ERROR_MSG);
  });

  test("Devuelve error si base está fuera del rango 2..256", () => {
    expect(zeroes(288, 32)).toBe(ERROR_MSG);
    expect(zeroes(1, 10)).toBe(ERROR_MSG);
  });
});

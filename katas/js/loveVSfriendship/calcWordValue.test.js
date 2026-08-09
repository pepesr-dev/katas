import calcWordValue from "./loveVSfriendship.js"; // ¡CAMBIADO AQUÍ!

describe("Pruebas para calcWordValue (Love vs Friendship)", () => {
  test('Debe calcular correctamente el valor de "love" (54)', () => {
    expect(calcWordValue("love")).toBe(54);
  });

  test('Debe calcular correctamente el valor de "friendship" (108)', () => {
    expect(calcWordValue("friendship")).toBe(108);
  });

  test("Debe lanzar un error si la entrada contiene números", () => {
    expect(() => calcWordValue("lov3")).toThrow();
  });
});

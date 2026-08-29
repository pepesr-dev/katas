import { zeroes } from "./factorialTail.js"; 
describe("Función zeroes", () => {
  test("Comprueba que la función existe", () => {
    
    expect(zeroes(10,25)).toBe(25); 
  });
});
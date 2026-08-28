# [Factorial tail - 4-kyu](https://www.codewars.com/kata/55c4eb777e07c13528000021/typescript)

## Description codewars
### The problem
How many zeroes are at the end of the **factorial** of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.

- Hacer un factorial y sacar la cantidad de zeros al final

**Factorial**: Número entero positivo (+Z) producto de todos los enteros positivos desde el 1 hasta el mismo. 

5! => 5x4x3x2x1 = 120 
0! = 1

**Uso:** Calcular formas distintas de ordenar varios elementos (Permutar).
*Ayuda a resolver problemas de probabilidad*


### Scalability
Unfortunately, **machine integer numbers** has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn't an efficient way to find just the tail of a factorial. Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, even using efficient Karatsuba algorithm

- Es complicado con tecnología básica

### Your task
is to write a function, which will find the number of zeroes at the end of (number) factorial **in arbitrary radix = base** for larger numbers.

- Escibir una función que lo haga

**base** is an integer from 2 to 256
**number** is an integer from 1 to 1'000'000

**Note Second argument:** number is always declared, passed and displayed as a regular decimal number. If you see a test described as 42! in base 20 it's 4210 not 4220 = 8210.

#Algorithms

## pista:
```
export const zeroes = (base: number, num: number) => {
  return 0;
};
```

## test
```
describe("zeroes", () => {
    it("should return 2 when input is (10,10)", () => {
        const expected = 2;
        const actual = zeroes(10, 10);

        expect(actual).to.eql(expected);
    });
    
    it("should return 3 when input is (16,16)", () => {
        const expected = 3;
        const actual = zeroes(16, 16);

        expect(actual).to.eql(expected);
    });
});
```

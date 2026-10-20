//todo - sacar primos limitantes en pc
// todo - y con otra base

export const zeroes = (base: number, num: number) => {
  let zeroes = 0;
  if (base === 10) {
    while (num >= 5) {
      console.log(num);
      num = Math.floor(num / 5);
      zeroes += num;
    }
    return zeroes;
  } else if (base === 16) {
  } else {
    return 0;
  }
};

//console.log(zeroes(10, 25));
console.log(zeroes(10, 25));
//6
console.log(zeroes(10, 100));
//24

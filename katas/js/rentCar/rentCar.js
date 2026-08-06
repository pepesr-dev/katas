//Escribe el código que calcule el coste total
// del alquiler de un choche en función de la
// cantidad de días de alquiler y las diferentes
// ofertas.

//40$ por día
//3 > -20$ de descuento
//7 > - 50$ de descuento

const calcCarRent = (days) => {
  const rentPerDay = 40;
  let totalPrice;
  //Retorna el primer caso verdadero
  switch (true) {
    case days >= 3 && days < 7:
      totalPrice = days * rentPerDay - 20;
      break;
    case days >= 7:
      totalPrice = days * rentPerDay - 50;
      break;
    default:
      totalPrice = days * rentPerDay;
  }
  return totalPrice;
};
console.log("Coste total del alquiler: " + calcCarRent(7) + "$");
//2 = 80$
//3 = 100$
//7 = 230$

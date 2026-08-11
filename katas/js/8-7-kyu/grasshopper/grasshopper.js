/**
 * Retorna un saludo al propietario si el nombre de la persona
 * entrante y el del propietario coinciden
 * @param {*} name Nombre de la persona entrante
 * @param {*} owner Nombre del propietario
 * @returns string
 */
const personalizedMessage = (name, owner) => {
  if (name == owner) {
    return "hello boss";
  } else {
    return "hello guest";
  }
};

console.log(personalizedMessage("lenia", "pepe"));

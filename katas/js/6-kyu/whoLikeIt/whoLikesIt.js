//wholikesIt?

/**
 * Devuelve un mensaje con la cantidad de personas a las
 * que les gusta algo
 * @param {Array} names
 */
function likes(names) {
  //Devuelve la primera opción verdadera
  switch (true) {
    case names.length == 1:
      return names[0] + " likes this";

    case names.length == 2:
      return names[0] + " and " + names[1] + " like this";

    case names.length == 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";

    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

    default:
      return "no one likes this";
  }
}

//const NAMES = [];
//const NAMES = ["Pepe"];
//const NAMES = ["Pepe", "Lenia"];
//const NAMES = ["Pepe", "Lenia", "María"];
const NAMES = ["Pepe", "Lenia", "María", "Daniel"];
/*
const NAMES = [
  "Pepe",
  "Lenia",
  "María",
  "Daniel",
  "Alvaro",
  "Lorena",
  "Miguel",
];
*/

console.log(likes(NAMES));

module.exports = likes;

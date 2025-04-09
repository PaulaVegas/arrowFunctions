// 1. Funciones flecha
//    1.- Convierte la siguiente función en una función flecha:
//    function greetings() {
//    return "Hola";
//    }

const greetings = () => "Hola";
console.log(greetings());

//    2.- Convierte la siguiente función en una función flecha en línea:
//    function division(a, b) {
//    return a / b;
//    }
const division = (a, b) => a / b;
console.log(division(10, 2));

//    3.- Convierte la siguiente función en una función flecha:
//    function myName(name) {
//    return `Mi nombre es ${name}`;
//    }
const myName = (name) => `Mi nombre es ${name}`;
console.log(myName("Po"));

//    4.- Convierte las siguientes funciones en funciones flecha:
//    function test2() {
//    console.log("Función test 2 ejecutada.");
//    }
//    function test1(callback) {
//    callback();
//    }
const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
test1(test2);

// 2. Foreach
//    Utiliza el siguiente array para resolver los próximos ejercicios:
let people = [
  { name: "Jamiro", age: 45 },
  { name: "Juan", age: 35 },
  { name: "Paco", age: 34 },
  { name: "Pepe", age: 14 },
  { name: "Pilar", age: 24 },
  { name: "Laura", age: 24 },
  { name: "Jenny", edad: 10 },
];

//    1.- Crea un array con la gente mayor de 25 años y muéstralo por consola.
const arrMayoresDe25 = [];
const mayoresDe25 = people.forEach((person) => {
  if (person.age >= 25) {
    arrMayoresDe25.push(person.name);
  }
});
console.log("Array de mayores de 25: ", arrMayoresDe25);

//    2.- Crea un array con la gente que empieza por J.
const arrConJ = [];
const jotaDeJabugo = people.forEach((person) => {
  if (person.name.startsWith("J")) {
    arrConJ.push(person.name);
  }
});
console.log("Array con J: ", arrConJ);

// 3. Map
//    1.- Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const arrMayores = [];
const mapMayores = people.map((person) => {
  if (person.age >= 25) {
    arrMayores.push(person.name);
  }
});
console.log(arrMayores);
//    2.- Crea un array con la gente que empieza por J.
const conJ = [];
const mapConJ = people.map((person) => {
  if (person.name.startsWith("J")) {
    conJ.push(person.name);
  }
});
console.log("Nombres con J: ", conJ);
//    3.- Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [4, 5, 6, 7, 8, 9, 10];
// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
const numsElevados = [];
const mapaElevados = numbers.map((number) => {
  const elevado = Math.pow(number, number);
  numsElevados.push(elevado);
});
console.log("Numeros elevados: ", numsElevados);
// 4. Filter
//    1.- Crea un segundo array que devuelva los impares
const numbersDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrImpares = [];
const filterImpares = numbersDos.filter((number) => {
  if (number % 2 !== 0) {
    arrImpares.push(number);
  }
});
console.log("Array de impares: ", arrImpares);
//    2.- Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
//    /_ [
//    'Que rico Tempeh me voy a comer!',
//    'Que rica Tofu burguer me voy a comer!'
//    ]
//    _/
const arrVeganos = [];
const filterVeganos = foodList.filter((food) => {
  if (food.isVeggie === true) {
    arrVeganos.push(`Que rico ${food.name} me voy a comer!`);
  }
});
console.log("Array de veganos: ", arrVeganos);

// 5. Reduce
//    1.- Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numbersTres = [39, 2, 4, 25, 62];
//    // Salida--> 483600
const multiplicación = numbersTres.reduce((acc, number) => acc * number);
console.log("Multiplicación: ", multiplicación);
// Extras
// Map
// 1.- Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const mapFrases = staff.map((person) => {
  return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(
    " y "
  )}`;
});
console.log("Frases: ", mapFrases);
// // Resultado esperado
// /_
// [
// 'Pepe es TheBoss y le gusta leer y ver pelis',
// 'Ana es becaria y le gusta nadar y bailar',
// 'Luis es programador y le gusta dormir y comprar',
// 'Ana es becaria y le gusta nadar y bailar',
// 'Carlos es secretario y le gusta fútbol y queso'
// ]
// _/

// 2.- Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodListDos = ["Pizza", "Ramen", "Paella", "Entrecot"];
// //Resultado esperado
// /_ [
// 'Como soy de Italia, amo comer Pizza',
// 'Como soy de Japón, amo comer Ramen',
// 'Como soy de Valencia, amo comer Paella',
// 'Aunque no como carne, el Entrecot es sabroso'
// ]
// _/
const mapFoodlistDos = foodListDos.map((food) => {
  switch (food) {
    case "Pizza":
      return `Como soy de Italia, amo comer ${food}`;
    case "Ramen":
      return `Como soy de Japón, amo comer ${food}`;
    case "Paella":
      return `Como soy de Valencia, amo comer ${food}`;
    case "Entrecot":
      return `Aunque no como carne, el ${food} es sabroso`;
    default:
      return food;
  }
});
console.log("Array de comida: ", mapFoodlistDos);
// Filter
// 1.- Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const productosCaros = inventory.filter((product) => product.price > 300);
console.log(productosCaros);

// Reduce
// 1.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  "Me",
  "llamo",
  "Po",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const fraseJs = sentenceElements.reduce(
  (base, element) => base + " " + element
);
console.log(fraseJs);
// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

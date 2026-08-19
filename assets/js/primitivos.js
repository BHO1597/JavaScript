
let nombre = 'Peter Parker'; // es un string
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`; // Alt + 96 se hace el vartip o comillas invertidas


console.log( typeof nombre);

nombre = 123;
console.log( typeof nombre);

let esMarvel = true; // dato booleano

let esMarvel2 = false; // False la mayusc no debe estar
console.log( typeof esMarvel);

let edad = 33; // tipo number
console.log( typeof edad);

edad = 33.001; // sigue siendo un nro no existe flotantes en js
console.log(typeof edad);

let superPoder; // camelCase para desarrolladores JS no snakeCase standar en python
console.log(typeof superPoder); // ?? resultado sale indefinido

let soyNull = null;
console.log(typeof soyNull); // en JS todos son objetos excepto los datos primitivos

let symbol1 = Symbol('a'); // Symbol identifica propiedades de manera unica
let symbol2 = Symbol('a');

console.log(typeof symbol1); // resultado sale tipo symbol

console.log( symbol1 === symbol2); // da false
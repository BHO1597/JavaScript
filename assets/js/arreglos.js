// Los arreglos son muy parecidos a una lista de informacion, que contienen un grupo de elemntos 

// tenemos una coleccion de juegos puede ser un arreglado xq todos los juegos estan contenidos en un estante

// [] cuando veamos estas llaves cuadras en JS significa que es un arreglo

// Los arreglos en Js empiezan en la posicion 0 , 1 , 2 , ....

// const arr = new ArrayBuffer(10);
// const arr = []; - tambien se puede inicializar asi un arreglo pero es un arreglo vacio
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Brandon',
    1 + 2,
    function(){},
    ()=>{},
    { a:1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr.Willy',
        'Woodman'
    ]]
];

// console.log( {arregloCosas} );

// console.log(arregloCosas[2]);

console.log( arregloCosas[7][4][1] );
const fs = require('node:fs');

// ESTO SE EJECUTA DE MODO SYNC
// console.log('Leyendo el primer archivo...');
// const text = fs.readFileSync('./archivo.txt', 'utf-8');

// console.log(text);

// console.log('hacer cosas mientras lee el archivo...');

// console.log('Leyendo el segundo archivo...');
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
// console.log(secondText);



// ESTO SE EJECUTA DE MODO ASYNC
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <--- ejecutas este callback
    console.log(text);
})
console.log('hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => {
    console.log(secondText);
});

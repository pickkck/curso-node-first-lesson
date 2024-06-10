import { readFile } from 'node:fs/promises';

console.log('Comienza a trabajar...');
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log(text);
    console.log(secondText);
});
console.log('Sigue trabajando...');


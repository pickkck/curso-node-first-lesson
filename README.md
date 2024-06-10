# Curso de Node: Primera Lección

## Diferencias entre CJS y MJS
**CJS** CommonJS, es la forma antigüa pero aún utilizada de importar y exportar modulos 
```js
// Exportar
module.exports = {
    sum
};

// Importar
const { sum } = require('./paht')
```

**MJS** ESModules, es la forma moderna y más utilizada actualmente para importar y exportar modulos.
```js
// Exportar
export function sum (a, b) {
    return a + b;
}

// Importar
import { sum } from './operations.mjs'
```
## Modulos internos de Node
Revisamos algunos de los Modulos más usados de Node y diferentes funciones que tienen, tambien aprendimos que en el require a partir de Node 16, se recomienda poner node: y el nombre del modulo.

Aprendimos sobre la sincronia y asincronia y los diferentes tipos existentes.

Esta sección termina con un ejercicio donde encapsulamos varios de los Modulos vistos, concluyendo con una funcion de ls avanzada para ver información de los archivos contenidos en un path.

## Modulos externos NPM
Inicializamos nuestro proyecto con 
```
npm init
```
Con esto se configura para dar toda la informacion del proyecto.
Utilizamos el modulo externo picocolors instalandolo con el comando 
```
npm install picocolors
```
Con esto nos agrega a las dependencias de producción este modulo ya que será necesario para el funcionamiento de nuestra aplicación. 
Con este modulo modificamos nuestra funcion de ls advance para darle color a la salida de consola.
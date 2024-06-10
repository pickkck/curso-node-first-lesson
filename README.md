# Curso de Node: Primera Lección

## Diferencias entre CJS y MJS
**CJS** CommonJS, es la forma antigüa pero aún utilizada de importar y exportar modulos 
```
// Exportar
module.exports = {
    sum
};

// Importar
const { sum } = require('./paht')
```

**MJS** ESModules, es la forma moderna y más utilizada actualmente para importar y exportar modulos.
```
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
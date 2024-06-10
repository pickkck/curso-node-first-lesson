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

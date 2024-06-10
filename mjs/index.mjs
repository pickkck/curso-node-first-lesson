// .js -> por defecto utilliza CommonJS
// .mjs -> para utilizar ESModules
// .cjs -> para utilizar CommonJS

import { sum, sub, mult } from './operations.mjs'

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));

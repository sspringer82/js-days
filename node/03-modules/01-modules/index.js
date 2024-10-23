// Import von benannten Exporten aus math.js
import { add } from './math.js';

// Import des Default-Exports aus math.js
import multiply from './math.js';

// Import des stringUtils-Moduls
import { toUpperCase, greeting } from './stringUtils.js';

// Import der cacheDemo-Funktion
import { demoFunction } from './cacheDemo.js';

// Verwende die Funktionen aus den Modulen
console.log('--- Berechnungen mit math.js ---');
console.log(`Addiere: 2 + 3 = ${add(2, 3)}`);
console.log(`Multipliziere: 4 * 5 = ${multiply(4, 5)}`);

console.log('--- String-Operationen mit stringUtils.js ---');
console.log(`Großgeschrieben: ${toUpperCase('esm cache')}`);
console.log(greeting);

// Demonstriere den Modulcache
console.log('--- Modulcache Demonstration ---');
console.log('cacheDemo.js wird importiert...');
demoFunction(); // Ruft die Funktion auf

console.log('cacheDemo.js wird erneut importiert...');
import('./cacheDemo.js').then(({ demoFunction }) => {
  demoFunction(); // Sollte aus dem Cache geladen werden
});

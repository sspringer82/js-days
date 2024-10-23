import { fork } from 'child_process';

// Funktion zur Teilung des Bereichs für mehrere Prozesse
function splitRange(start, end, numParts) {
  const range = [];
  const step = Math.floor((end - start + 1) / numParts);
  for (let i = 0; i < numParts; i++) {
    const rangeStart = start + i * step;
    const rangeEnd = i === numParts - 1 ? end : rangeStart + step - 1;
    range.push({ start: rangeStart, end: rangeEnd });
  }
  return range;
}

// Starte die Kindprozesse und verteile die Arbeit
const numProcesses = 4;
const ranges = splitRange(1, 100, numProcesses);
const processes = [];
let completed = 0;
let allPrimes = [];

// Starte Kindprozesse und sende den jeweiligen Bereich
ranges.forEach((range, index) => {
  const child = fork('./child.js');
  child.send(range);

  child.on('message', (primes) => {
    console.log(
      `Kindprozess ${index + 1} hat folgende Primzahlen berechnet:`,
      primes
    );
    allPrimes = [...allPrimes, ...primes];
    completed++;

    // Wenn alle Kindprozesse fertig sind, zeige das Ergebnis an
    if (completed === numProcesses) {
      allPrimes.sort((a, b) => a - b); // Sortiere die Primzahlen
      console.log('Alle Primzahlen:', allPrimes);
    }
  });

  processes.push(child);
});

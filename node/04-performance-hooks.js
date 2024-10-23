console.time('foo');
for (let i = 0; i < 1_000_000; i++) {
  // console.log('do it');
  const result = 1 + 2;
}
console.timeEnd('foo');

import { performance, PerformanceObserver } from 'node:perf_hooks';

// Funktion, um eine zeitintensive Aufgabe zu simulieren
function simulateTask() {
  for (let i = 0; i < 1e7; i++) {} // CPU-intensives Rechnen
}

// Erstelle einen PerformanceObserver, um Performance-Einträge zu überwachen
const observer = new PerformanceObserver((items) => {
  // Performance-Einträge in der Konsole ausgeben
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)} ms`);
  });
  performance.clearMarks(); // Markierungen nach der Messung löschen
});

// Startet den PerformanceObserver
observer.observe({ entryTypes: ['measure'], buffered: true });

// Setze die erste Markierung
performance.mark('start-task');

// Führe die simulierte Aufgabe aus
simulateTask();

// Setze die zweite Markierung und messe die Zeit zwischen den Markierungen
performance.mark('end-task');
performance.measure('Task Duration', 'start-task', 'end-task');

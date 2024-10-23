// Importiere das performance_hooks-Modul
import { performance, PerformanceObserver } from 'perf_hooks';

// Simuliert eine schnelle Aufgabe
function fastTask() {
  for (let i = 0; i < 1e6; i++) {} // Schnellere Schleife
}

// Simuliert eine langsamere Aufgabe
function slowTask() {
  for (let i = 0; i < 1e8; i++) {} // Langsame Schleife
}

// Erstelle einen PerformanceObserver, um Performance-Einträge zu überwachen
const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)} ms`);
  });
  performance.clearMarks(); // Markierungen nach der Messung löschen
});

obs.observe({ entryTypes: ['measure'], buffered: true });

// Messen der fastTask
performance.mark('start-fastTask');
fastTask();
performance.mark('end-fastTask');
performance.measure('Fast Task Duration', 'start-fastTask', 'end-fastTask');

// Messen der slowTask
performance.mark('start-slowTask');
slowTask();
performance.mark('end-slowTask');
performance.measure('Slow Task Duration', 'start-slowTask', 'end-slowTask');

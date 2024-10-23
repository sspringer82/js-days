Übungsaufgabe: Messen der Ausführungszeit zweier Funktionen

Aufgabe:

Du sollst zwei verschiedene Funktionen in einem Node.js-Skript messen, um deren Ausführungszeit mit Hilfe des performance_hooks-Moduls zu vergleichen. Deine Aufgabe besteht darin, den gegebenen Quellcode zu erweitern und Messungen für die Ausführungszeiten beider Funktionen durchzuführen.

Vorgehen:

	1.	Füge Messungen hinzu: Verwende das performance_hooks-Modul, um die Ausführungszeit der beiden Funktionen fastTask() und slowTask() zu messen.
	2.	Nutze Performance-Marken: Setze Marken (performance.mark) vor und nach jeder Funktion und verwende performance.measure, um die Zeitdifferenz zu berechnen.
	3.	Gib die Ergebnisse aus: Zeige die gemessenen Zeiten in der Konsole an.

Gegebener Quellcode:

```js
// Importiere das performance_hooks-Modul
import { performance, PerformanceObserver } from 'perf_hooks';

// Simuliert eine schnelle Aufgabe
function fastTask() {
  for (let i = 0; i < 1e6; i++) {}  // Schnellere Schleife
}

// Simuliert eine langsamere Aufgabe
function slowTask() {
  for (let i = 0; i < 1e8; i++) {}  // Langsame Schleife
}

// Erstelle einen PerformanceObserver, um Performance-Einträge zu überwachen
const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach(entry => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)} ms`);
  });
  performance.clearMarks();  // Markierungen nach der Messung löschen
});

obs.observe({ entryTypes: ['measure'], buffered: true });

// Hier sollst du die Messungen für fastTask und slowTask hinzufügen

// Deine Lösung startet hier
```

Deine Aufgabe:

	1.	Setze Performance-Marken um die Funktionen fastTask() und slowTask(), um deren Ausführungszeiten zu messen.
	2.	Messe die Zeitdifferenz zwischen den Marken für jede Funktion.
	3.	Gib die Messungen für beide Aufgaben (fastTask und slowTask) in der Konsole aus.
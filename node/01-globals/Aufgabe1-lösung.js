import { setInterval, clearInterval } from 'timers';

// Globale Aufgabenverwaltung
global.tasks = [];

function addTask(name, interval, taskFunction) {
  const intervalId = setInterval(taskFunction, interval);
  global.tasks.push({ name, intervalId, interval });
}

function stopTask(name) {
  const taskIndex = global.tasks.findIndex((task) => task.name === name);
  if (taskIndex !== -1) {
    clearInterval(global.tasks[taskIndex].intervalId);
    global.tasks.splice(taskIndex, 1);
    console.log(`Task "${name}" gestoppt.`);
  }
}

// Simuliere verschiedene Aufgaben
addTask('Daten abrufen', 2000, () => {
  console.log('Daten werden abgerufen...');
  // Simuliere einen Fehler nach 10 Sekunden
  if (Math.random() < 0.1) {
    throw new Error('Fehler beim Abrufen der Daten');
  }
});

addTask('Protokoll schreiben', 3000, () => {
  console.log('Protokolleintrag erstellt.');
});

addTask('Ressourcen überwachen', 4000, () => {
  console.log('Speichernutzung überwachen...');
  const memoryUsage = process.memoryUsage();
  console.log(
    `Speicher in Verwendung: ${memoryUsage.heapUsed / 1024 / 1024} MB`
  );
});

// Überwache aktive Aufgaben
const monitorInterval = setInterval(() => {
  console.log(`Es laufen ${global.tasks.length} Aufgaben:`);
  global.tasks.forEach((task) => {
    console.log(`- ${task.name} läuft alle ${task.interval}ms`);
  });
}, 5000);

// Fehlerbehandlung
process.on('uncaughtException', (err) => {
  console.error('Ein Fehler ist aufgetreten:', err.message);
});

// Beende alle Aufgaben nach 30 Sekunden
setTimeout(() => {
  console.log('Beende alle Aufgaben...');
  global.tasks.forEach((task) => stopTask(task.name));
  clearInterval(monitorInterval);
  console.log('Programm beendet.');
}, 30000);

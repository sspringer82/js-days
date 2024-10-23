import { Worker, isMainThread, workerData } from 'worker_threads';

// Erstelle einen SharedArrayBuffer mit Platz für 10 Int32-Werte
const sharedBuffer = new SharedArrayBuffer(10 * Int32Array.BYTES_PER_ELEMENT);
const sharedArray = new Int32Array(sharedBuffer);

console.log('Ursprüngliche Werte:', sharedArray);

// Starte den Worker-Thread
const worker = new Worker('./worker.js', { workerData: sharedBuffer });

// Warte, bis der Worker den Speicher geändert hat
worker.on('message', () => {
  console.log('Shared Memory im Hauptthread:', sharedArray);
});

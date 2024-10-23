import { Worker } from 'worker_threads';

// Text, der analysiert werden soll
const text = 'Dies ist ein Beispieltext mit mehreren Wörtern.';

// SharedArrayBuffer für Zeichen- und Wortanzahl
const sharedBuffer = new SharedArrayBuffer(2 * Int32Array.BYTES_PER_ELEMENT);
const sharedArray = new Int32Array(sharedBuffer);

// Starte den Worker und übergebe den Text und Shared Memory
const worker = new Worker('./worker.js', {
  workerData: { text, sharedBuffer },
});

// Warte auf die Nachricht vom Worker
worker.on('message', () => {
  console.log(`Zeichenanzahl: ${sharedArray[0]}`);
  console.log(`Wortanzahl: ${sharedArray[1]}`);
});

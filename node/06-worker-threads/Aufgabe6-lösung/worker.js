import { workerData, parentPort } from 'worker_threads';

// Text und SharedArrayBuffer aus dem Hauptthread empfangen
const { text, sharedBuffer } = workerData;
const sharedArray = new Int32Array(sharedBuffer);

// Berechne die Zeichenanzahl
sharedArray[0] = text.length;

// Berechne die Wortanzahl
sharedArray[1] = text.split(/\s+/).filter((word) => word.length > 0).length;

// Benachrichtige den Hauptthread, dass die Berechnung abgeschlossen ist
parentPort.postMessage('Berechnung abgeschlossen');

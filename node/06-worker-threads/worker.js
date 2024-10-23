import { parentPort, workerData } from 'worker_threads';

// SharedArrayBuffer im Worker-Thread empfangen
const sharedArray = new Int32Array(workerData);

// Ändere Werte im SharedArrayBuffer
for (let i = 0; i < sharedArray.length; i++) {
  sharedArray[i] = i * 2; // Beispiel: Werte mit einem Faktor von 2 multiplizieren
}

// Benachrichtige den Hauptthread, dass die Arbeit fertig ist
parentPort.postMessage('Arbeit erledigt');

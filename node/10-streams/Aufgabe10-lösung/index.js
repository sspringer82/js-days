import {
  TextDecoderStream,
  TextEncoderStream,
  TransformStream,
} from 'node:stream/web';
import { open } from 'node:fs/promises';

// Erstelle einen ReadableStream aus der Eingabedatei
const fileHandle = await open('input.txt', 'r');
const readableWebStream = fileHandle.readableWebStream();

// Transformiere jede Zeile in Großbuchstaben
const transformStream = new TransformStream({
  transform(chunk, controller) {
    const lines = chunk.split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        controller.enqueue(line.toUpperCase() + '\n');
      }
    });
  },
});

// Erstelle einen Web WritableStream für die Ausgabedatei
const outputHandle = await open('output.txt', 'w');
const writableWebStream = new WritableStream({
  write(chunk) {
    return outputHandle.writeFile(chunk);
  },
});

// Lese aus der Eingabedatei, transformiere und schreibe in die Ausgabedatei
await readableWebStream
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(transformStream)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(writableWebStream);

// Schließe die Datei-Handles
await fileHandle.close();
await outputHandle.close();

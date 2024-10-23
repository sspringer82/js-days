import fs from 'fs/promises';
import path from 'path';

// Pfad der Datei
const filePath = path.join(process.cwd(), 'example.txt');

try {
  // 1. Datei erstellen und initialen Text schreiben
  await fs.writeFile(filePath, 'Dies ist der initiale Text in der Datei.');
  console.log('Datei erstellt und initialer Text geschrieben.');

  // 2. Datei lesen
  let data = await fs.readFile(filePath, 'utf8');
  console.log('Dateiinhalt nach Erstellung:');
  console.log(data);

  // 3. Dateiinhalt aktualisieren
  await fs.appendFile(filePath, '\nEin weiterer Text wird hinzugefügt.');
  console.log('Neuer Text zur Datei hinzugefügt.');

  // 4. Datei erneut lesen, um die Änderungen zu sehen
  data = await fs.readFile(filePath, 'utf8');
  console.log('Dateiinhalt nach dem Hinzufügen von Text:');
  console.log(data);

  // 5. Datei löschen
  await fs.unlink(filePath);
  console.log('Datei erfolgreich gelöscht.');
} catch (err) {
  console.error('Es ist ein Fehler aufgetreten:', err);
}

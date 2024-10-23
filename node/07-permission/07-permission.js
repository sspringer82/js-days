import fs from 'fs';
import { permission } from 'process';

console.log('go');

// Überprüfe, ob Lesezugriff auf das Dateisystem erlaubt ist
if (permission.has('fs.read', './read')) {
  console.log('Lesezugriff auf den Ordner ist erlaubt.');

  // Lese eine Datei
  fs.readFile('./read/sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Lesen der Datei:', err);
      return;
    }
    console.log('Dateiinhalt:', data);
  });
} else {
  console.error('Kein Lesezugriff auf den Ordner.');
}

// Überprüfe, ob Schreibzugriff erlaubt ist
if (permission.has('fs.write', './write')) {
  console.log('Schreibzugriff auf den Ordner ist erlaubt.');

  // Schreibe in eine Datei
  fs.writeFile('./write/output.txt', 'Hallo Welt!', (err) => {
    if (err) {
      console.error('Fehler beim Schreiben der Datei:', err);
      return;
    }
    console.log('Datei erfolgreich geschrieben.');
  });
} else {
  console.error('Kein Schreibzugriff auf den Ordner.');
}

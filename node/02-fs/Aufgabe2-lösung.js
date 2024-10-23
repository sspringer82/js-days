import fs from 'fs/promises';
import path from 'path';

// Verzeichnis und Dateiname
const notesDir = path.join(process.cwd(), 'notes');
const noteFile = (noteName) => path.join(notesDir, `${noteName}.txt`);

// Funktion zum Erstellen einer Notiz
async function createNote(noteName, content) {
  await fs.mkdir(notesDir, { recursive: true }); // Erstelle das Verzeichnis, falls es nicht existiert
  await fs.writeFile(noteFile(noteName), content);
  console.log(`Notiz "${noteName}" wurde erstellt.`);
}

// Funktion zum Lesen einer Notiz
async function readNote(noteName) {
  try {
    const data = await fs.readFile(noteFile(noteName), 'utf8');
    console.log(`Inhalt der Notiz "${noteName}":\n${data}`);
  } catch (err) {
    console.error(`Fehler beim Lesen der Notiz "${noteName}":`, err.message);
  }
}

// Funktion zum Aktualisieren einer Notiz
async function updateNote(noteName, newContent) {
  await fs.appendFile(noteFile(noteName), `\n${newContent}`);
  console.log(`Notiz "${noteName}" wurde aktualisiert.`);
}

// Funktion zum Löschen einer Notiz
async function deleteNote(noteName) {
  await fs.unlink(noteFile(noteName));
  console.log(`Notiz "${noteName}" wurde gelöscht.`);
}

// Test der Funktionen
async function testNotes() {
  const noteName = 'Meine Notiz';
  await createNote(noteName, 'Dies ist eine neue Notiz.');
  await readNote(noteName);
  await updateNote(noteName, 'Dies ist ein zusätzlicher Text.');
  await readNote(noteName);
  await deleteNote(noteName);
}

testNotes();

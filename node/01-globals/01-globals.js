import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Hol dir den Dateinamen der aktuellen Datei
const __filename = fileURLToPath(import.meta.url);

// Hol dir den Verzeichnisnamen der aktuellen Datei
const __dirname = dirname(__filename);

console.log('Aktueller Dateiname:', __filename);
console.log('Aktueller Verzeichnisname:', __dirname);

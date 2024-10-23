import { webcrypto } from 'crypto';

// Funktion zum Erstellen eines SHA-256-Hashes
export async function createHash(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await webcrypto.subtle.digest('SHA-256', data);
  return bufferToHex(hashBuffer);
}

// Funktion zum Vergleichen von Text und Hash
export async function verifyHash(text, hashToVerify) {
  const hash = await createHash(text);
  return hash === hashToVerify;
}

// Hilfsfunktion: Konvertiert ArrayBuffer in einen Hex-String
function bufferToHex(buffer) {
  const hashArray = Array.from(new Uint8Array(buffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

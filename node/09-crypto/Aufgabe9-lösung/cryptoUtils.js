import { webcrypto } from 'crypto';

// Erstelle einen Schlüssel aus dem Passwort mit PBKDF2
async function getKey(password, salt) {
  const encoder = new TextEncoder();
  const keyMaterial = await webcrypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return webcrypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

// Funktion zur Verschlüsselung
export async function encrypt(text, password) {
  const iv = webcrypto.getRandomValues(new Uint8Array(12)); // Initialisierungsvektor
  const salt = webcrypto.getRandomValues(new Uint8Array(16)); // Salt für PBKDF2
  const key = await getKey(password, salt);
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const encrypted = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    data
  );

  return {
    encryptedText: Buffer.from(encrypted).toString('base64'),
    iv: Buffer.from(iv).toString('base64'),
    salt: Buffer.from(salt).toString('base64'),
  };
}

// Funktion zur Entschlüsselung
export async function decrypt(encryptedText, password, iv, salt) {
  const key = await getKey(password, Buffer.from(salt, 'base64'));
  const decodedIv = Buffer.from(iv, 'base64');
  const encryptedData = Buffer.from(encryptedText, 'base64');

  const decrypted = await webcrypto.subtle.decrypt(
    { name: 'AES-GCM', iv: decodedIv },
    key,
    encryptedData
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

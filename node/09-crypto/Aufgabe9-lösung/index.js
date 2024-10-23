import { encrypt, decrypt } from './cryptoUtils.js';

const text = 'Geheime Nachricht';
const password = 'meinPasswort';

(async () => {
  const { encryptedText, iv, salt } = await encrypt(text, password);
  console.log('Verschlüsselter Text:', encryptedText);

  const decryptedText = await decrypt(encryptedText, password, iv, salt);
  console.log('Entschlüsselter Text:', decryptedText);
})();

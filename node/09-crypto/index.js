import { createHash, verifyHash } from './hash.js';

const text = 'Hello, World!';

createHash(text).then((hash) => {
  console.log('Erstellter Hash:', hash);

  // Überprüfen, ob der Hash übereinstimmt
  verifyHash('Hello, World!', hash).then((isMatch) => {
    console.log('Stimmt der Hash überein?', isMatch);
  });
});

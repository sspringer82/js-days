import { readFile } from 'node:fs/promises';
import { readFile as readFileCB, readFileSync } from 'node:fs';

(async () => {
  try {
    const data = await readFile('./input.txt', 'utf-8');
    console.log('Promise mit await: ', data);
  } catch (error) {
    console.error(error);
  }
})();

async function getData() {
  try {
    const data = await readFile('./input.txt', 'utf-8');
    console.log('Promise mit async/await: ', data);
  } catch (error) {
    console.error(error);
  }
}
getData();

readFile('./input.txt', 'utf-8').then((data) => {
  console.log('Promise: ', data);
});

readFileCB('./input.txt', 'utf-8', (error, data) => {
  if (error !== null) {
    console.error(error);
    return;
  }
  console.log('Async: ', data);
});

const data = readFileSync('./input.txt', 'utf-8');
console.log('Sync: ', data);

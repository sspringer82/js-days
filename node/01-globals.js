import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createServer } from 'node:http';
// import express from 'express';

console.log('Hallo, Basti!');

console.log(process.versions);

const response = await fetch('https://api.github.com/users/robinweser');
const data = await response.json();
console.log(data);

createServer((req, res) => {
  res.end('Hallo, Welt!');
}).listen(3000);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

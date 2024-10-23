import { writeFile } from 'fs/promises';

// Funktion, um das Modul neu zu laden (Cache umgehen)
async function loadConfig() {
  const { config } = await import('./config.js');
  console.log('Aktuelle Konfiguration:', config);
  return config;
}

// Funktion, um das Modul erneut zu laden, mit Cache-Umgehung
async function reloadConfig() {
  const configModulePath = './config.js';
  console.log('Lösche das Config-Modul aus dem Cache...');

  // Dynamischer Import mit einer Cache-Umgehung durch einen Query-String
  const { config } = await import(`${configModulePath}?update=${Date.now()}`);
  console.log('Neu geladene Konfiguration:', config);
}

// Lade die Konfiguration das erste Mal
await loadConfig();

const newContent = `
console.log('config.js wird geladen...');

export const config = {
  mode: 'production',
  apiEndpoint: 'https://api.prod.example.com',
  retryCount: 5,
};

`;
const fileContent = await writeFile('./config.js', newContent);

// Simuliere eine Änderung und lade die Konfiguration neu
console.log('\nSimuliere eine Änderung der Konfiguration...\n');
await reloadConfig();

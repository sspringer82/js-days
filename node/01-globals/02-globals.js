// Verwende das global Objekt direkt, um eine globale Variable zu erstellen
global.myGlobalVar = 'Das ist eine globale Variable!';
console.log(global.myGlobalVar);

// Zeige Informationen über den Prozess an, wie z.B. die aktuelle Node.js Version
console.log('Node.js Version:', process.version);
console.log('Prozess-ID:', process.pid);

// Verwende setTimeout, eine eingebaute globale Funktion
setTimeout(() => {
  console.log('Diese Nachricht wird nach 2 Sekunden angezeigt.');
}, 2000);

// Zugriff auf den Buffer, ein weiteres globales Objekt in Node.js
const buffer = Buffer.from('Hallo Node.js');
console.log('Buffer Inhalt:', buffer.toString());

// process.nextTick für eine Funktion, die im nächsten Event Loop ausgeführt wird
process.nextTick(() => {
  console.log('Dies wird im nächsten Tick ausgeführt.');
});

console.log(
  'Diese Nachricht wird zuerst angezeigt, bevor der nächste Tick aufgerufen wird.'
);

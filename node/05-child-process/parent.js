import { fork } from 'child_process';

// Starte den Kindprozess
const child = fork('./child.js');

// Sende die Zahl an den Kindprozess, bis zu der die Fibonacci-Reihe berechnet werden soll
child.send({ n: 10 });

// Empfange das Ergebnis vom Kindprozess
child.on('message', (result) => {
  console.log('Fibonacci-Reihe vom Kindprozess:', result);
});

// Funktion zur Berechnung der Fibonacci-Reihe
function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Empfange die Zahl vom Elternprozess
process.on('message', (data) => {
  const { n } = data;

  // Berechnung der Fibonacci-Reihe
  const result = fibonacci(n);

  // Sende das Ergebnis zurück an den Elternprozess
  process.send(result);
});

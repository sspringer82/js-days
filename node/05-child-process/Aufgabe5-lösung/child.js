// Funktion zur Berechnung der Primzahlen in einem Bereich
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function calculatePrimes(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Empfange den Bereich vom Elternprozess
process.on('message', (range) => {
  const { start, end } = range;
  const primes = calculatePrimes(start, end);

  // Sende die Primzahlen zurück an den Elternprozess
  process.send(primes);
});

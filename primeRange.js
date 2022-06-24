let isPrime;
const primes = [1, 2];
range = 50;
function primeChecker(range) {
  for (i = 3; i <= range; i = i + 2) {
    isPrimeNumber = true;
    for (j = 1; j < primes.length; j++) {
      if (i % primes[j] == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      primes[primes.length] = i;
    }
  }

  return primes;
}
console.log(primeChecker(range));

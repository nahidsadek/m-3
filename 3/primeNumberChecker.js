const readline = require('readline');

function isPrime(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Prime Number Checker');
rl.question('Enter a positive integer: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number) || number <= 0) {
    console.log('Invalid input. Please enter a positive integer.');
  } else {
    const result = isPrime(number);
    console.log(`Is ${number} a prime number? ${result}`);
  }

  rl.close();
});

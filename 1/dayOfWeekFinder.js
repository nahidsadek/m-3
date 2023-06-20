const readline = require('readline');

function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();

  return daysOfWeek[dayOfWeek];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a date (YYYY-MM-DD): ', (dateString) => {
  const dayOfWeek = getDayOfWeek(dateString);
  console.log('The day of the week is:', dayOfWeek);
  rl.close();
});


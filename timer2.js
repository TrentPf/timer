const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timers = function() {
  rl.question("Enter a timer (1-9 seconds, b for instant, ctrl-c to exit): ", function(timer) {
    if (timer === "b") {
      process.stdout.write('.\n');
    }
    if (timer >= 1 && timer <= 9) {
      process.stdout.write(`Setting timer for ${timer} seconds...\n`);
      setTimeout(() => {
        process.stdout.write('.\n');
      }, timer * 1000);
    }
    setTimeout(() => {
      timers();
    }, 1 + timer * 1000);
  });
};

process.on('exit', function() {
  console.log('\nThanks for using me, ciao!');
});

timers();
const args = process.argv;
let timers = args.slice(2);

for (let timer of timers) {
  if (timer >= 0) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, timer * 1000);
  }
}
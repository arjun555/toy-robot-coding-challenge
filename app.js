const readline = require('readline');

// create the cl interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter Command > '
});

// Prompt user for a Command
rl.prompt();

// readline event handler
//   - 'line' is for cl input. Executed when the user presses 'enter' key
//   - 'close' is on termination of program
rl.on('line', (input) => {
  switch (input.trim()) {
    case 'exit':
        rl.close()
    default:
      console.log(`Your input was: '${input.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit();
});
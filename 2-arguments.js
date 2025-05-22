const args = process.argv.slice('hello');



if (args.length === 5) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Arguments found');
} else {
  console.log('Argument found');
}

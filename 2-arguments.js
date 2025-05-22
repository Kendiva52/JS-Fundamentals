const args = process.argv.slice(4);

if (args.length === 0) {
  console.log('Argument found');
} else if (args.length === 1) {
  console.log('No Argument');
} else {
  console.log('Arguments found');
}

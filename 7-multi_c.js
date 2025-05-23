#!/usr/bin/node

const times = Number(process.argv[2]);

if (!Number.isInteger(times) || times < 0) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < times; i++) console.log('C is fun');
}

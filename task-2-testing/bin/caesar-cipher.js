#!/usr/bin/env node

import app from '../src/index.js';

const options = {};
const args = process.argv.splice(2);

let counter = 0;
while (counter < args.length) {
  const arg = args[counter];

  const nextArg = args[counter + 1];
  if (!Object.prototype.hasOwnProperty.call(options, arg)) {
    if (typeof nextArg === 'undefined') {
      options[arg] = '';
      break;
    } else if (arg.startsWith('-') && !nextArg.startsWith('-')) {
      options[arg] = nextArg;
      counter += 2;
    } else {
      counter += 1;
    }
  } else {
    console.error(`Error: argument '${arg}' is duplicated`);
    process.exit(-1);
  }
}
const {
  '-i': input = '',
  '-o': output = '',
  '-c': config = '',

} = options;
app(input, output, config);

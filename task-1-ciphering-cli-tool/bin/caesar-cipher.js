#!/usr/bin/env node

import program from 'commander';

const configOptionDescription = `config for ciphers Config is a string with pattern {XY(-)}n, where:
      X is a cipher mark:
      C is for Caesar cipher (with shift 1)
      A is for Atbash cipher
      R is for ROT-8 cipher
      Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
      1 is for encoding
      0 is for decoding`;

program
  .storeOptionsAsProperties()
  .description('CLI tool that will encode and decode a text by Caesar/Atbash/ROT-8 cipher.')
  .version('1.0.0')
  .option('-i, --input <string>', 'a path to input file', '')
  .option('-o, --output <string>', 'output: a path to output file', '')
  .requiredOption('-c, --config <string>', configOptionDescription, '')
  .parse(process.argv);

const {
  input, output, config,
} = program.opts();

console.log(input, output, config);

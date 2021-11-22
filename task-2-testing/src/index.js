import path from 'path';
import { pipeline } from 'stream';

import rs from './streams/read.js';
import ws from './streams/write.js';
import CaesarTransform from './streams/transform-caesar.js';
import RotTransform from './streams/transform-rot.js';
import AtbashTransform from './streams/transform-abtash.js';

import parseConfig from '../lib/parse-config.js';

const mapper = {
  C0: () => new CaesarTransform('decode'),
  C1: () => new CaesarTransform('encode'),
  R0: () => new RotTransform('decode'),
  R1: () => new RotTransform('encode'),
  A: () => new AtbashTransform(),
};

export default (input = '', output = '', config = '') => {
  const parsedConfig = parseConfig(config);

  const transformPipes = parsedConfig.map((el) => mapper[el]());

  pipeline(
    rs(input && path.resolve(input)),
    ...transformPipes,
    ws(output && path.resolve(output)),

    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    },
  );
};

import { Transform } from 'stream';
import caesar from '../../lib/caesar.js';

export default class extends Transform {
  constructor(mode) {
    super(mode);
    this.mode = mode;
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, cb) {
    try {
      let shift;
      switch (this.mode) {
        case 'encode':
          shift = 8;
          break;
        case 'decode':
          shift = -8;
          break;
        default:
          console.error(`Unknown mode encode/decode mode: ${this.mode}`);
      }
      const caesarChunk = caesar(chunk.toString(), shift);
      this.push(caesarChunk);
      cb();
    } catch (err) {
      cb(err);
    }
  }
}

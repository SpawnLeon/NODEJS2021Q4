import { Transform } from 'stream';
import atbash from '../../lib/atbash.js';

export default class extends Transform {
  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, cb) {
    try {
      const caesarChunk = atbash(chunk.toString());
      this.push(caesarChunk);
      cb();
    } catch (err) {
      cb(err);
    }
  }
}

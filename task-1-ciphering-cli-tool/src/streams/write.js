import fs from 'fs';

export default (filePath) => {
  if (!filePath) {
    return process.stdout;
  }

  return fs.createWriteStream(filePath, { encoding: 'utf8', flags: 'a' });
};

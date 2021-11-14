import fs from 'fs';

export default (filePath) => {
  if (!filePath) {
    return process.stdout;
  }
  const isFileExist = fs.existsSync(filePath);
  if (!isFileExist) {
    process.stderr.write(`Error: file is not exist (${filePath})\n`);
    process.exit(-1);
  }

  return fs.createWriteStream(filePath, { encoding: 'utf8', flags: 'a' });
};

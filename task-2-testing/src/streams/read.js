import fs from 'fs';

export default (filePath) => {
  if (!filePath) {
    return process.stdin;
  }
  const isFileExist = fs.existsSync(filePath);
  if (!isFileExist) {
    process.stderr.write(`Error: file is not exist (${filePath})\n`);
    process.exit(-1);
  }
  return fs.createReadStream(filePath, 'utf8');
};

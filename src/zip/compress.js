import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const compress = async () => {
  const nameRead = path.join(__dirName, '/files/fileToCompress.txt');
  const nameWrite = path.join(__dirName, '/files/arhive.gz');

  const readStream = createReadStream(nameRead);
  const writeStram = createWriteStream(nameWrite);
  const gz = createGzip();
  readStream.pipe(gz).pipe(writeStram);
  console.log('File fileToCompress.txt archived');
};

compress();

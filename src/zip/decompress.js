import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
export const decompress = async () => {
  const nameWrite = path.join(__dirName, '/files/fileToCompress.txt');
  const nameRead = path.join(__dirName, '/files/arhive.gz');

  const readStream = createReadStream(nameRead);
  const writeStram = createWriteStream(nameWrite);

  const uz = createUnzip();
  readStream.pipe(uz).pipe(writeStram);
  console.log('File arhive.txt unarchived');
};

decompress();

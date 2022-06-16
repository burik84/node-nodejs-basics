import { createReadStream, readFile } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
export const read = async () => {
  const name = path.join(__dirName, '/files/fileToRead.txt');

  const stream = createReadStream(name, 'utf-8');
  // stream.on('data',(data)=>{
  //     process.stdout.write(data)
  // })
  stream.pipe(process.stdout);
};

read();

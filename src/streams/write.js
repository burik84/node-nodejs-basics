import { createWriteStream, WriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const write = async () => {
  const name = path.join(__dirName, '/files/fileToWrite.txt');

  const stream = createWriteStream(name);
  // process.stdin.on('data',(data)=>{
  //     stream.write(data.toString())
  // })

  process.stdin.pipe(stream);
  console.log('Write anything to console and check it in fileToWrite.txt...\n');
};

write();

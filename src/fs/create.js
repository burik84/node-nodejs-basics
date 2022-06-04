import { throws } from 'assert';
import * as fs from 'fs/promises';
import path from 'path';
export const create = async () => {
  const content = 'I am fresh and young';
  const filename = path.join(path.resolve(), '/src/fs/files/fresh.txt');

  try {
    await fs.access(filename);
    // throw Error('FS operation failed')
    console.error('FS operation failed');
  } catch {
    try {
        await fs.writeFile(filename, content);
        console.log('FS operation finished');
      } catch (error) {
        console.error(error)
      }
  }


};

create();

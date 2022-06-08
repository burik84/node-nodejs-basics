import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const create = async () => {
  const content = 'I am fresh and young';
  const filename = path.join(__dirName, '/files/fresh.txt');

  try {
    await fs.writeFile(filename, content, { flag: 'wx' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

create();

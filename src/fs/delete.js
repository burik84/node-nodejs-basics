import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const remove = async () => {
    const fileName = path.join(__dirName, '/files/fileToRemove.txt');

  try {
    await fs.unlink(fileName);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove()
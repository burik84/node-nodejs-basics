import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
export const list = async () => {
  const folder = path.join(__dirName, '/files');

  try {
    const files = await fs.readdir(folder);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

list();

import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const rename = async () => {
  const fileName = path.join(__dirName, '/files/properFilename.md');
  const fileWrong = path.join(__dirName, '/files/wrongFilename.txt');

  try {
    await fs.rename(fileWrong, fileName);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

rename();

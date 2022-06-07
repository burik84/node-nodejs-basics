import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFile } from 'fs';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const read = async () => {
  const file = path.join(__dirName, '/files/fileToRead.txt');

  try {
    const text = await fs.readFile(file,'utf-8');
    console.log(text);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

read()
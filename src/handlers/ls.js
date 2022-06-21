import { table } from 'console';
import { readdir } from 'fs/promises';
import { resolve } from 'path';
import displayCurrentDirectory from '../helpers/display';
export const handleLS = async () => {
  try {
    const currentDir = resolve(process.cwd());
    const files = await readdir(currentDir);
    console.table(files);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

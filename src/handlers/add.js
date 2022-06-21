import { open } from 'fs/promises';
import { resolve } from 'path';
import displayCurrentDirectory from '../helpers/display';

export const handleAdd = async ([newName]) => {
  let fileHandle;
  try {
    const pathToFile = resolve(process.cwd(), newName);
    fileHandle = await open(pathToFile, 'w');
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  } finally {
    fileHandle?.close();
  }
};

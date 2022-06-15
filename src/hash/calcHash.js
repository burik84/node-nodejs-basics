import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
export const calculateHash = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirName = path.dirname(__fileName);
  const fileToHash = path.join(__dirName, '/files/fileToCalculateHashFor.txt');

  try {
    const fileContent = await readFile(`${fileToHash}`);
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log('Hash: ', hash);
  } catch (error) {
    throw error;
  }
};

calculateHash();

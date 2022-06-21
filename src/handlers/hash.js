import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { customOutput } from '../helpers/output';
import displayCurrentDirectory from '../helpers/display';
export const handleHash = async ([rawPath]) => {
  try {
    const pathToFile = resolve(rawPath);
    const hsh = createHash('sha256');
    const readeblStream = createReadStream(pathToFile);

    await pipeline(readeblStream, hsh.setEncoding('hex'), customOutput());
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

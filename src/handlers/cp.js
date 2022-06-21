import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { displayCurrentDirectory } from '../helpers/display';
export const handleCP = async ([rawPath, rawPathToDirectory]) => {
  try {
    const pathToFile = resolve(rawPath);
    const { base } = parse(pathToFile);
    const pathToDirectory = resolve(rawPathToDirectory, base);

    const readeblStream = createReadStream(pathToFile);
    const writebleStream = createWriteStream(pathToDirectory);

    await pipeline(readeblStream, writebleStream);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

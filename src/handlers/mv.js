import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { displayCurrentDirectory } from '../helpers/display';
import { isDirectory as isCurrentDirectory } from '../helpers/isFiles';
export const handleMv = async ([rawPath, rawPathNew]) => {
  try {
    const isDirectory = await isCurrentDirectory(rawPathNew);
    if (!isDirectory) throw new Error("It's not a directory");

    const pathToFile = resolve(rawPath);
    const { base } = parse(pathToFile);

    const pathToNewDirectory = resolve(rawPathNew, base);

    const readeblStream = createReadStream(pathToFile);
    const writebleStream = createWriteStream(pathToNewDirectory);
    await pipeline(readeblStream, writebleStream);
    await unlink(pathToFile);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

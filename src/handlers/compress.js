import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { displayCurrentDirectory } from '../helpers/display';
import { isDirectory as isCurrentDirectory, isFile as isCurrentFile } from '../helpers/isFiles';

export const handleCompress = async ([rawPath, rawPathToDestination]) => {
  try {
    const isDirectory = await isCurrentDirectory(rawPathToDestination);
    const isFile = await isCurrentFile(rawPath);
    if (!isDirectory) throw new Error("It's not a directory");
    if (!isFile) throw new Error("It's not a file");

    const pathToFile = resolve(rawPath);
    const { base } = parse(pathToFile);
    const fileName = `${base}.br`;
    const pathToDestination = resolve(rawPathToDestination, fileName);

    const readeblStream = createReadStream(pathToFile);
    const writebleStream = createWriteStream(pathToDestination);
    const brotliCompress = createBrotliCompress();
    await pipeline(readeblStream, brotliCompress, writebleStream);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

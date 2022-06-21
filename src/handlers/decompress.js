import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { displayCurrentDirectory } from '../helpers/display';
import {
  isDirectory as isCurrentDirectory,
  isFile as isCurrentFile,
} from '../helpers/isFiles';

export const handleDecompress = async ([rawPath, rawPathToDestination]) => {
  try {
    const isDirectory = await isCurrentDirectory(rawPathToDestination);
    const isFile = await isCurrentFile(rawPath);
    if (!isDirectory) throw new Error("It's not a directory");
    if (!isFile) throw new Error("It's not a file");

    const pathToFile = resolve(rawPath);
    const { name, ext } = parse(pathToFile);
    if (!ext.includes('.br')) {
      throw new Error('invalid path extension');
    }

    const pathToDestination = resolve(rawPathToDestination, name);

    const readeblStream = createReadStream(pathToFile);
    const writebleStream = createWriteStream(pathToDestination);
    const brotliDecompress = createBrotliDecompress();
    await pipeline(readeblStream, brotliDecompress, writebleStream);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

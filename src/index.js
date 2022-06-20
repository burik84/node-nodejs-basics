import EventEmitter from 'node:events';
import { homedir } from 'os';
import * as readline from 'node:readline';

import {
  handleAdd,
  handleCat,
  handleCD,
  handleCompress,
  handleCP,
  handleDecompress,
  handleHash,
  handleLine,
  handleLS,
  handleMv,
  handleOS,
  handleRM,
  handleRn,
  handleUp,
  han,
} from './handlers/index.js';

import displayCurrentDirectory from './helpers/display.js';
import { exit } from 'node:process';

chdir(homedir());

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.split('=');
    return [key, value];
  })
);

const username = args['--username'] ? args['--username'] : 'strange';

console.log(`Welcome to the File Manages ${username}`);
displayCurrentDirectory();

const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(0);
eventEmitter
  .on('up', handleUp)
  .on('cd', handleCD)
  .on('ls', handleLS)
  .on('cat', handleCat)
  .on('add', handleAdd)
  .on('rn', handleRn)
  .on('cp', handleCP)
  .on('mv', handleMv)
  .on('hash', handleHash)
  .on('os', handleOS)
  .on('compress', handleCompress)
  .on('decompress', handleDecompress);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', handleLine.bind(rl, eventEmitter))
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${username}`);
    process.nextTick(()=>exit())
  });

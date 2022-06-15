import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const random = Math.random();

const { default: unknownObject } =
  random > 0.5
    ? await import('./files/a.json', { assert: { type: 'json' } })
    : await import('./files/b.json', { assert: { type: 'json' } });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__fileName}`);
console.log(`Path to current directory is ${__dirName}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };

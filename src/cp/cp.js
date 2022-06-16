import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const spawnChildProcess = async (args) => {
  const name = path.join(__dirName, '/files/script.js');
  let init = false;

  const child_process = spawn('node',[ name, ...args.split(' ')]);

  process.stdin.on('data', (msg) => {
    child_process.stdin.write(msg);
  });

  child_process.stdout.on('data', (data) => {
    console.log(data.toString());
    if (!init) {
      console.log('Write anything to console... \n');
      init = true;
    }
  });
};

spawnChildProcess('--silent --all');

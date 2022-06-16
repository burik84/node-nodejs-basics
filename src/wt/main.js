import { Worker } from 'worker_threads';
import { cpus } from 'os';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
export const performCalculations = async () => {
  const cp = cpus();
  let number = 10;
  const name = path.join(__dirName, '/worker.js');

  const workerResult = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(name, {
          workerData: number++,
        });
        worker.on('message', (msg) => resolve(msg));
        worker.on('error', (msg) => reject(msg));
      });
    })
  );
  const result = workerResult.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(result);

  return result;
};

performCalculations();

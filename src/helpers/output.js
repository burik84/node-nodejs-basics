import { finished, Writable } from 'stream';
import { promisify } from 'util';

const finishedAsync = promisify(finished);

const customOutput = () => {
  return new Writable({
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk);
      callback();
    },
  });
};

export { finishedAsync, customOutput };

export const parseArgs = () => {
  const inputProcess = process.argv.slice(2);
  const cliProcess = inputProcess.reduce((acc, cur, idx, arr) => {
    const item = arr[idx + 1];
    if (item && cur.startsWith('--')) {
      const str = cur.slice(2);
      const template = `${str} is ${item}`;
      acc.push(template);
    }
    return acc;
  }, []);

  console.log(cliProcess.join(', '));
};

parseArgs();

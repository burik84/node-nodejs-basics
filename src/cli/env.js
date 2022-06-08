export const parseEnv = () => {
  const arr = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith('RSS_')) acc.push(`${key}=${value}`);
    return acc;
  }, []);
  console.log(arr.join('; '));
};

parseEnv();

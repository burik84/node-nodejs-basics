import { displayCurrentDirectory } from '../helpers/display';

export const handleCD = async ([rawPath]) => {
  try {
    process.chdir(rawPath);
    displayCurrentDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

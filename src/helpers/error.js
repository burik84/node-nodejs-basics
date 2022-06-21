import { displayCurrentDirectory } from './display';

export const handleError = (error) => {
  if (error) {
    console.error('Operation failed');
  } else {
    displayCurrentDirectory();
  }
};

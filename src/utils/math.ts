import { lastIndexOf, range, fill, isNaN, isNil } from 'lodash';

const generateIsPrimeNumbers = (n: number) => {
  const results = fill(range(n), true);
  results[0] = false;
  results[1] = false;
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (results[i]) {
      let j = i * i;
      while (j < n) {
        results[j] = false;
        j += i;
      }
    }
    i += 1;
  }
  return results;
};

// eslint-disable-next-line import/prefer-default-export
export const calculatePreviousPrimeNumber = (n: number | null) => {
  // TODO: cache isPrimeNumbers, so that if n <= last n, it won't be recalculated.
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(n) || isNil(n)) {
    return null;
  }

  if (n <= 2) {
    return null;
  }

  const isPrimeNumbers = generateIsPrimeNumbers(n);
  return lastIndexOf(isPrimeNumbers, true);
};

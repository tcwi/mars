import run from './run.js';

const filename = process.argv[2];

if (!filename) {
  throw new TypeError(
    'No filename was provided - this should be given as the first argument.'
  );
}

run(filename);

import run, { loadInput } from './run.js';

test('run reads valid text file and logs output in the correct format', async () => {
  const log = jest.spyOn(console, 'log');
  await run('./fixtures/valid.txt');
  expect(log).toBeCalledWith('(4, 4, E)\n(0, 4, W) LOST');
});

test('loadInput reads valid text file and returns the grid size, initial state, and list of commands', async () => {
  const input = await loadInput('./fixtures/valid.txt');
  expect(input).toEqual({
    grid: { x: 4, y: 8 },
    robots: [
      {
        initialState: {
          x: 2,
          y: 3,
          orientation: 'E',
        },
        commands: ['L', 'F', 'R', 'F', 'F'],
      },
      {
        initialState: {
          x: 0,
          y: 2,
          orientation: 'N',
        },
        commands: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
      },
    ],
  });
});

test('loadInput handles text files with extra whitespace', async () => {
  const input = await loadInput('./fixtures/valid-extra-newlines.txt');
  expect(input).toEqual({
    grid: { x: 4, y: 8 },
    robots: [
      {
        initialState: {
          x: 2,
          y: 3,
          orientation: 'E',
        },
        commands: ['L', 'F', 'R', 'F', 'F'],
      },
      {
        initialState: {
          x: 0,
          y: 2,
          orientation: 'N',
        },
        commands: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
      },
    ],
  });
});

test('loadInput errors if provided with an invalid text file', async () => {
  await expect(async () => {
    await loadInput('./fixtures/invalid.txt');
  }).rejects.toThrow(
    new TypeError(
      'The provided input "This is an invalid text file" is not valid - please refer to the documentation.'
    )
  );
});

test('loadInput errors if provided with a filename that does not exist', async () => {
  await expect(async () => {
    await loadInput('does-not-exist.txt');
  }).rejects.toThrow('ENOENT');
});

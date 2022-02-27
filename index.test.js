import { loadInput, createGrid, createCommands } from './index';

test('loadInput reads valid text file and returns the grid size and list of commands', async () => {
  const input = await loadInput('./fixtures/valid.txt');
  expect(input).toEqual({
    grid: { x: 4, y: 8 },
    commands: [
      {
        x: 2,
        y: 3,
        orientation: 'E',
        commands: 'LFRFF',
      },
      {
        x: 0,
        y: 2,
        orientation: 'N',
        commands: 'FFLFRFF',
      },
    ],
  });
});

test('loadInput handles text files with extra whitespace', async () => {
  const input = await loadInput('./fixtures/valid-extra-newlines.txt');
  expect(input).toEqual({
    grid: { x: 4, y: 8 },
    commands: [
      {
        x: 2,
        y: 3,
        orientation: 'E',
        commands: 'LFRFF',
      },
      {
        x: 0,
        y: 2,
        orientation: 'N',
        commands: 'FFLFRFF',
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

test('createGrid sets up grid with initial values', () => {
  const grid = createGrid('4 8');
  expect(grid).toEqual({ x: 4, y: 8 });
});

test('createGrid throws an error if grid is provided in incorrect format', () => {
  expect(() => {
    createGrid('invalid grid');
  }).toThrow(
    new TypeError(
      'The provided input "invalid grid" is not valid - please refer to the documentation.'
    )
  );
});

test('createCommands parses commands for each robot', () => {
  const commands = createCommands(['(2, 3, E) LFRFF', '(0, 2, N) FFLFRFF]']);
  expect(commands).toEqual([
    { commands: 'LFRFF', orientation: 'E', x: 2, y: 3 },
    { commands: 'FFLFRFF', orientation: 'N', x: 0, y: 2 },
  ]);
});

test('createCommands throws an error if commands are provided in incorrect format', () => {
  expect(() => {
    createCommands(['invalid commands']);
  }).toThrow(
    new TypeError(
      'The provided input "invalid commands" is not valid - please refer to the documentation.'
    )
  );
});

test('sets initial state of a robot', () => {});

test('reports to user if initial state of a robot is outside of the bounds of the grid', () => {});

test('moves a robot forward on the grid', () => {});

test('reports a robot as lost if it is moved off the grid', () => {});

test('handles rotating left', () => {});

test('handles rotating right', () => {});

test('handles multiple left rotations', () => {});

test('handles multiple right rotations', () => {});

test('handles left rotation followed by right rotation', () => {});

test('handles right rotation followed by left rotation', () => {});

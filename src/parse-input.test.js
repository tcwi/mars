import { createGrid, createRobots } from './parse-input';

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

test('createRobots parses commands for each robot', () => {
  const robots = createRobots(['(2, 3, E) LFRFF', '(0, 2, N) FFLFRFF]']);
  expect(robots).toEqual([
    {
      commands: ['L', 'F', 'R', 'F', 'F'],
      initialState: { orientation: 'E', x: 2, y: 3 },
    },
    {
      commands: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
      initialState: { orientation: 'N', x: 0, y: 2 },
    },
  ]);
});

test('createRobots throws an error if commands are provided in incorrect format', () => {
  expect(() => {
    createRobots(['invalid robots']);
  }).toThrow(
    new TypeError(
      'The provided input "invalid robots" is not valid - please refer to the documentation.'
    )
  );
});

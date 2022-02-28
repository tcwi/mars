import { readFile } from 'fs/promises';
import { createGrid, createRobots } from './parse-input.js';
import moveRobot from './move-robot.js';
import logOutput from './output-logger.js';

export const loadInput = async (filename) => {
  const file = await readFile(filename, { encoding: 'utf8' });
  const [gridString, ...robotStrings] = file.split('\n').filter(Boolean);
  const grid = createGrid(gridString);
  const robots = createRobots(robotStrings);
  return { grid, robots };
};

const run = async (filename) => {
  const { grid, robots } = await loadInput(filename);

  const output = robots.map(({ initialState, commands }) => {
    return moveRobot(initialState, grid, commands);
  });

  logOutput(output);
};

export default run;

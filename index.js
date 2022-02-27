import { readFile } from 'fs/promises';

export const loadInput = async (filename) => {
  const file = await readFile(filename, { encoding: 'utf8' });
  const [gridString, ...commandStrings] = file.split('\n').filter(Boolean);
  const grid = createGrid(gridString);
  const commands = createCommands(commandStrings);
  return { grid, commands };
};

const getGroupsFromRegex = (string, regex) => {
  try {
    const { groups } = string.match(regex);
    const { x, y, ...rest } = groups;
    return { x: parseInt(x, 10), y: parseInt(y, 10), ...rest };
  } catch {
    throw new TypeError(
      `The provided input "${string}" is not valid - please refer to the documentation.`
    );
  }
};

export const createGrid = (gridString) => {
  const gridRegex = /(?<x>\d+) (?<y>\d+)/;
  return getGroupsFromRegex(gridString, gridRegex);
};

export const createCommands = (commandStrings) =>
  commandStrings.map((command) => {
    const commandRegex =
      /\((?<x>\d+), (?<y>\d+), (?<orientation>[NESW])\) (?<commands>[LFR]+)/;
    return getGroupsFromRegex(command, commandRegex);
  });

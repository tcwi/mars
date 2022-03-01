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

const gridRegex = /^(?<x>\d+) (?<y>\d+)$/;

export const createGrid = (gridString) =>
  getGroupsFromRegex(gridString, gridRegex);

const robotRegex =
  /^\((?<x>\d+), (?<y>\d+), (?<orientation>[NESW])\) (?<commands>[LFR]+)$/;

export const createRobots = (robotStrings) =>
  robotStrings.map((robot) => {
    const { commands, ...initialState } = getGroupsFromRegex(robot, robotRegex);
    return { commands: Array.from(commands), initialState };
  });

const getNewPosition = (x, y, orientation) => {
  switch (orientation) {
    case 'N':
      return { x, y: y + 1 };
    case 'E':
      return { x: x + 1, y };
    case 'S':
      return { x, y: y - 1 };
    case 'W':
      return { x: x - 1, y };
  }
};

const orientations = ['N', 'E', 'S', 'W'];

const getNewOrientation = (rotation, currentOrientation) => {
  const isRightRotation = rotation === 'R';
  const orientationIndex = orientations.indexOf(currentOrientation);
  const newOrientationIndex = orientationIndex + (isRightRotation ? 1 : -1);
  return orientations[newOrientationIndex] || (isRightRotation ? 'N' : 'W');
};

/**
 * @typedef {Object} RobotState
 * @property {number} x - x coordinate
 * @property {number} y - y coordinate
 * @property {string} orientation - the orientation, N, E, S or W
 * @property {bool} [lost] - whether the robot has left the grid
 */

/**
 * @param {RobotState} state - the current state of the robot
 * @param {{x: number, y: number}} grid - the size of the grid
 * @param {string[]} commands - a list of commands to give to the robot, F, L or R
 * @returns {RobotState}
 */
const moveRobot = (state, grid, commands) => {
  const { x, y, orientation } = state;
  const [nextCommand, ...remainingCommands] = commands;

  if (!nextCommand) {
    return state;
  }

  if (['L', 'R'].includes(nextCommand)) {
    const newOrientation = getNewOrientation(nextCommand, orientation);

    return moveRobot(
      { x, y, orientation: newOrientation },
      grid,
      remainingCommands
    );
  }

  const { x: newX, y: newY } = getNewPosition(x, y, orientation);

  if (newX < 0 || newX > grid.x || newY < 0 || newY > grid.y) {
    return { ...state, lost: true };
  }

  return moveRobot({ x: newX, y: newY, orientation }, grid, remainingCommands);
};

export default moveRobot;

import moveRobot from './move-robot';

const grid = { x: 2, y: 2 };

test('returns the state if there are no remaining commands', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, [])).toEqual(initialState);
});

test('rotates left if given the command "L"', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['L'])).toEqual({
    x: 1,
    y: 1,
    orientation: 'W',
  });
});

test('rotates right if given the command "R"', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['R'])).toEqual({
    x: 1,
    y: 1,
    orientation: 'E',
  });
});

test('moves robot forward in x direction if facing E', () => {
  const initialState = { x: 1, y: 1, orientation: 'E' };
  expect(moveRobot(initialState, grid, ['F'])).toEqual({
    x: 2,
    y: 1,
    orientation: 'E',
  });
});

test('moves robot forward in y direction if facing N', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['F'])).toEqual({
    x: 1,
    y: 2,
    orientation: 'N',
  });
});

test('moves robot backwards in x direction if facing W', () => {
  const initialState = { x: 1, y: 1, orientation: 'W' };
  expect(moveRobot(initialState, grid, ['F'])).toEqual({
    x: 0,
    y: 1,
    orientation: 'W',
  });
});

test('moves robot backwards in y direction if facing S', () => {
  const initialState = { x: 1, y: 1, orientation: 'S' };
  expect(moveRobot(initialState, grid, ['F'])).toEqual({
    x: 1,
    y: 0,
    orientation: 'S',
  });
});

test('reports a robot as lost with final state if it is moved off the grid', () => {
  const initialState = { x: 0, y: 1, orientation: 'W' };
  expect(moveRobot(initialState, grid, ['F'])).toEqual({
    x: 0,
    y: 1,
    orientation: 'W',
    lost: true,
  });
});

test('handles multiple left rotations', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['L', 'L'])).toEqual({
    x: 1,
    y: 1,
    orientation: 'S',
  });
});

test('handles multiple right rotations', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['R', 'R'])).toEqual({
    x: 1,
    y: 1,
    orientation: 'S',
  });
});

test('handles left rotation followed by right rotation', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['L', 'R'])).toEqual(initialState);
});

test('handles right rotation followed by left rotation', () => {
  const initialState = { x: 1, y: 1, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['R', 'L'])).toEqual(initialState);
});

test('handles multiple movements in the same direction', () => {
  const initialState = { x: 0, y: 1, orientation: 'E' };
  expect(moveRobot(initialState, grid, ['F', 'F'])).toEqual({
    x: 2,
    y: 1,
    orientation: 'E',
  });
});

test('handles combination of rotations and movements', () => {
  const initialState = { x: 0, y: 0, orientation: 'N' };
  expect(moveRobot(initialState, grid, ['F', 'R', 'F', 'L', 'L'])).toEqual({
    x: 1,
    y: 1,
    orientation: 'W',
  });
});

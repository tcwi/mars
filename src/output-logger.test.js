import logOutput from './output-logger.js';

test('logOutput takes valid output from moveRobot and logs it in the correct format', () => {
  const log = jest.spyOn(console, 'log');

  const output = [
    { x: 1, y: 4, orientation: 'N' },
    { x: 0, y: 4, orientation: 'W', lost: true },
  ];

  logOutput(output);

  expect(log).toBeCalledWith('(1, 4, N)\n(0, 4, W) LOST');
});

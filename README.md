# Mars Rover

This is a small program that takes in a series of commands from a text file, and uses these commands to move one or more 'robots' around a grid representing Mars. The program will provide output representing the final position (`x, y`) and orientation (`N`, `E`, `S` or `W`) of each robot in the format `(x, y, orientation)`. If the robot has been driven off the grid, it will be reported as `LOST`.

This program has been written using Node.js, to be run using Node version 16.14. `nvm use` can be run in order to pick up the version from the included `.nvmrc` file. `nvm` will guide the user how to install the correct version if it is not already installed. The program may not run with earlier versions as it uses ECMAScript modules.

This program does not rely on any dependencies, but has a dev dependency on `jest`, which is the testing framework that has been used. This itself has a dependency on a babel plugin to ensure tests against ECMAScript modules can be run. `prettier` is also included for formatting.

## Running the program

```
nvm use
node src/index ./example.txt
```

A file containing example commands has been provided, but this argument can be a path to any text file.

## Writing input commands

The input takes the form:

```
4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF
```

- The first line of the input (`4 8`) specifies the size of the grid that will be used to model Mars.
- The subsequent lines each represent the initial state and commands for a single robot.
- Initial state should be in the format `(x, y, orientation)`, where x and y are the position, and orientation can be `N`, `E`, `S` or `W`.
- Supported commands are `F`, to move forward one space, `L` to rotate left by 90 degrees, and `R`, to rotate right by 90 degrees.

## Running the tests

```
nvm use
npm install
npm test
```

A test coverage check can be performed using:

```
npm run test:coverage
```

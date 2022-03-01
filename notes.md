I hit the three hour limit, so made a note of some other things I'd do if I had more time:

- Add documentation to modules and functions using JSDoc. This would be especially helpful as I've not used a typed language. I quickly added documentation for the moveRobot function, as that is the most complicated function.
- I'm happy that the moveRobot function will only receive the 3 commands it is expecting with the way the program is currently written. It could be extended to defend against unexpected commands, which would guard against changes outside of that function.
- Improve error messaging and error handling around invalid syntax and file types
  - Could allow other robots to move if only one line is invalid for example
  - Could handle a missing or invalid file more gracefully rather than just a default error
  - Do some sort of input filetype validation
- Based on the example output, given the input `x y`, the grid contains squares `(0...x)` and `(0...y)`, so an input of `4` on the x axis, for example, is actually 5 squares wide. I'd have clarified this requirement upfront in a project usually.
- Test more thoroughly
  - unit test for getGroupsFromRegex
  - Could have more test cases for moveRobot, for different grid sizes, more combinations of commands
  - Top level index.js is untested

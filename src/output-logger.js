const logOutput = (output) => {
  const renderedOutput = output.map(
    ({ x, y, orientation, lost }) =>
      `(${x}, ${y}, ${orientation})${lost ? ' LOST' : ''}`
  );

  console.log(renderedOutput.join('\n'));
};

export default logOutput;

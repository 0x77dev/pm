let execShellCommand = cmd => {
  const exec = require('child_process').exec;
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};
module.exports = execShellCommand;

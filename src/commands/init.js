const {Command, flags} = require('@oclif/command')
const chalk = require('chalk');

class Init extends Command {
  async run() {
    const {flags} = this.parse(Init)
    const name = flags.name;
    this.log(`Initializing project: ${chalk.bgBlack.green(name)}.`);
  }
}

Init.description = `
Init with New Project with git and npm (or yarn).
`;

Init.flags = {
  name: flags.string({char: 'n', description: 'name of the project'}),
}

module.exports = Init;

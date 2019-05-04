const {Command, flags} = require('@oclif/command')
const chalk = require('chalk');
const exec = require('../modules/exec');

class Init extends Command {
  async run() {
    const {flags} = this.parse(Init)
    const name = flags.name;
    this.log('pmgr init v0.0.1');
    this.log(`Initializing project: ${chalk.bgBlack.green(name)}.`);
    this.log(`$ mkdir ${name} \n ${chalk.bgBlack.green(exec(`mkdir ${name}`))}`);
    this.log(`$ git init \n ${chalk.bgBlack.green(exec(`sh -c "cd ${name} && git init" `))}`);
    this.log(`$ yarn init -y \n ${chalk.bgBlack.green(exec(`sh -c "cd ${name} && yarn init -y" `))}`);
    this.log(`Done: ${chalk.bgBlack.green(name)}`);
  }
}

Init.description = `
Init with New Project with git and npm (or yarn).
`;

Init.flags = {
  name: flags.string({char: 'n', description: 'name of the project'}),
}

module.exports = Init;

const {Command, flags} = require('@oclif/command')
const chalk = require('chalk');
const exec = require('../modules/exec');

class Init extends Command {
  async run() {
    const {flags} = this.parse(Init)
    const name = flags.name;
    let modulesAutoInstall = flags.modulesAutoInstall;
    this.log('pmgr init v0.0.2');
    await this.log(`Initializing project: ${chalk.bgBlack.green(name)}.`);
    await this.log(`$ mkdir ${name} \n ${chalk.bgBlack.green(exec(`mkdir ${name}`))}`);
    await this.log(`$ git init \n ${chalk.bgBlack.green(exec(`sh -c "cd ${name} && git init" `))}`);
    await this.log(`$ yarn init -y \n ${chalk.bgBlack.green(exec(`sh -c "cd ${name} && yarn init -y" `))}`);
    if (modulesAutoInstall !== undefined && modulesAutoInstall !== '') {
      modulesAutoInstall = modulesAutoInstall.split(',');
      modulesAutoInstall.forEach(async Module => {
        await this.log(`$ yarn add ${Module} \n ${chalk.bgBlack.green(exec(`sh -c "cd ${name} && yarn add ${Module}" `))}`);
      });
    }
    this.log(`Done: ${chalk.bgBlack.green(name)}`);
  }
}

Init.description = `
Init with New Project with git and npm (or yarn).
`;

Init.flags = {
  name: flags.string({char: 'n', description: 'name of the project'}),
  modulesAutoInstall: flags.string({char: 'm', description: 'Modules to install.'}),
}

module.exports = Init;

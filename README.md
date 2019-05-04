pmgr
==

The Node.js Project Manager.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pmgr-cli.svg)](https://npmjs.org/package/pmgr-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pmgr-cli.svg)](https://npmjs.org/package/pmgr-cli)
[![License](https://img.shields.io/npm/l/pmgr-cli.svg)](https://github.com/https://github.com/0x77dev/pm/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pmgr-cli
$ pm COMMAND
running command...
$ pm (-v|--version|version)
pmgr-cli/0.0.1 darwin-x64 node-v12.0.0
$ pm --help [COMMAND]
USAGE
  $ pm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pm help [COMMAND]`](#pm-help-command)
* [`pm init`](#pm-init)

## `pm help [COMMAND]`

display help for pm

```
USAGE
  $ pm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `pm init`

Init with New Project with git and npm (or yarn).

```
USAGE
  $ pm init

OPTIONS
  -n, --name=name  name of the project

DESCRIPTION
  Init with New Project with git and npm (or yarn).
```

_See code: [src/commands/init.js](https://github.com/0x77dev/pm/pm/blob/v0.0.1/src/commands/init.js)_
<!-- commandsstop -->

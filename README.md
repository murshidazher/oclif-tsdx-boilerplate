# [@murshidazher/oclif-tsdx-boilerplate](https://github.com/murshidazher/oclif-tsdx-boilerplate)

A simple CLI boilerplate for making lot of things happen.

## Development

To run the CLI:

```bash
yarn start ARGS_AND_FLAGS
```

This package uses `@vercel/ncc` to package the CLI into a single file. `yarn build` will also automatically update this README.

```bash
yarn build
```

To run the executable:

```bash
./bin/run ARGS_AND_FLAGS
```

## Links

- [How to publish packages using GitHub Packages](https://javascript.plainenglish.io/publishing-private-npm-packages-using-github-packages-415993cd2da8)
- [How to use auto to publish GitHub Packages](https://intuit.github.io/auto/docs/build-platforms/github-actions)
- Use semantic release to release packages like oclif cli.

## Usage
  <!-- usage -->
```sh-session
$ npm install -g @murshidazher/oclif-tsdx-boilerplate
$ ocliftsdx COMMAND
running command...
$ ocliftsdx (--version)
@murshidazher/oclif-tsdx-boilerplate/0.0.0 darwin-arm64 node-v17.0.0
$ ocliftsdx --help [COMMAND]
USAGE
  $ ocliftsdx COMMAND
...
```
<!-- usagestop -->
  
## Commands
  <!-- commands -->
- [@murshidazher/oclif-tsdx-boilerplate](#murshidazheroclif-tsdx-boilerplate)
  - [Development](#development)
  - [Links](#links)
  - [Usage](#usage)
  - [Commands](#commands)
  - [`ocliftsdx goodbye PERSON`](#ocliftsdx-goodbye-person)
  - [`ocliftsdx hello PERSON`](#ocliftsdx-hello-person)
  - [`ocliftsdx hello dump`](#ocliftsdx-hello-dump)
  - [`ocliftsdx hello world`](#ocliftsdx-hello-world)
  - [`ocliftsdx help [COMMAND]`](#ocliftsdx-help-command)
  - [`ocliftsdx plugins`](#ocliftsdx-plugins)
  - [`ocliftsdx plugins:inspect PLUGIN...`](#ocliftsdx-pluginsinspect-plugin)
  - [`ocliftsdx plugins:install PLUGIN...`](#ocliftsdx-pluginsinstall-plugin)
  - [`ocliftsdx plugins:link PLUGIN`](#ocliftsdx-pluginslink-plugin)
  - [`ocliftsdx plugins:uninstall PLUGIN...`](#ocliftsdx-pluginsuninstall-plugin)
  - [`ocliftsdx plugins update`](#ocliftsdx-plugins-update)
  - [LICENSE](#license)

## `ocliftsdx goodbye PERSON`

Say goodbye

```
USAGE
  $ ocliftsdx goodbye [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say goodbye to

FLAGS
  -f, --from=<value>  (required) Whom is saying goodbye

DESCRIPTION
  Say goodbye

EXAMPLES
  $ ocliftsdx goodbye friend --from oclif
  goodbye friend from oclif! (./src/commands/goodbye/index.ts)
```

_See code: [dist/commands/goodbye/index.ts](https://github.com/murshidazher/oclif-tsdx-boilerplate/blob/v0.0.0/dist/commands/goodbye/index.ts)_

## `ocliftsdx hello PERSON`

Say hello

```
USAGE
  $ ocliftsdx hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ ocliftsdx hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/murshidazher/oclif-tsdx-boilerplate/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ocliftsdx hello dump`

Say hello dump

```
USAGE
  $ ocliftsdx hello dump

DESCRIPTION
  Say hello dump

EXAMPLES
  $ ocliftsdx hello dump
  hello dump! (./src/commands/hello/dump.ts)
```

## `ocliftsdx hello world`

Say hello world

```
USAGE
  $ ocliftsdx hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ocliftsdx hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ocliftsdx help [COMMAND]`

Display help for ocliftsdx.

```
USAGE
  $ ocliftsdx help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ocliftsdx.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `ocliftsdx plugins`

List installed plugins.

```
USAGE
  $ ocliftsdx plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ocliftsdx plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `ocliftsdx plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ocliftsdx plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ocliftsdx plugins:inspect myplugin
```

## `ocliftsdx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ocliftsdx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ocliftsdx plugins add

EXAMPLES
  $ ocliftsdx plugins:install myplugin 

  $ ocliftsdx plugins:install https://github.com/someuser/someplugin

  $ ocliftsdx plugins:install someuser/someplugin
```

## `ocliftsdx plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ocliftsdx plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ocliftsdx plugins:link myplugin
```

## `ocliftsdx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ocliftsdx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ocliftsdx plugins unlink
  $ ocliftsdx plugins remove
```

## `ocliftsdx plugins update`

Update installed plugins.

```
USAGE
  $ ocliftsdx plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

## LICENSE

[MIT](./LICENSE) &copy; 2021-2022 Murshid Azher.

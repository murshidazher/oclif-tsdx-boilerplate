import { Command } from '@oclif/core';

export default class Dump extends Command {
  static description = 'Say hello dump';

  static examples = [
    `$ ocliftsdx hello dump
hello dump! (./src/commands/hello/dump.ts)
`,
  ];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    this.log('hello dump! (./src/commands/hello/dump.ts)');
  }
}

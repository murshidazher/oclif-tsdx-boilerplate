import { Command, Flags } from '@oclif/core';

export default class Goodbye extends Command {
  static description = 'Say goodbye';

  static examples = [
    `$ ocliftsdx goodbye friend --from oclif
goodbye friend from oclif! (./src/commands/goodbye/index.ts)
`,
  ];

  static flags = {
    from: Flags.string({
      char: 'f',
      description: 'Whom is saying goodbye',
      required: true,
    }),
  };

  static args = [
    { name: 'person', description: 'Person to say goodbye to', required: true },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Goodbye);

    this.log(
      `goodbye ${args.person} from ${flags.from}! (./src/commands/goodbye/index.ts)`
    );
  }
}

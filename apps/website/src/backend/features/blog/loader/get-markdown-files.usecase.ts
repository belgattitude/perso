import type { PrismaClientDbMain } from '@belgattitude/db-main';

interface IUseCase<C, R = unknown> {
  execute(command: C): Promise<R>;
}

type MarkdownFiles = unknown[];

export class GetMarkdownFilesCommand {
  constructor(
    public readonly usernameOrEmail: string,
    public readonly password: string
  ) {}
  static create(
    usernameOrEmail: string,
    password: string
  ): GetMarkdownFilesCommand {
    return new GetMarkdownFilesCommand(usernameOrEmail, password);
  }
}

export class GetMarkdownFilesUsecase
  implements IUseCase<GetMarkdownFilesCommand>
{
  constructor(private readonly prisma: PrismaClientDbMain) {}
  async execute(command: GetMarkdownFilesCommand): Promise<MarkdownFiles> {
    return [];
  }
}

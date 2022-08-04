import { realpathSync } from 'fs';
import { readFileSync } from 'node:fs';
import fg from 'fast-glob';
import graymatter from 'gray-matter';
import { match } from 'ts-pattern';
import { z } from 'zod';

interface IUseCase<C, R = unknown> {
  execute(command: C): Promise<R>;
}

export class GetMarkdownFilesFromFsCommand {
  private constructor(public readonly baseDir: string) {}
  static create(baseDir: string): GetMarkdownFilesFromFsCommand {
    return new GetMarkdownFilesFromFsCommand(baseDir);
  }
}

const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
}, z.date());

const blogFrontMatterSchema = z.object({
  title: z.string(),
  author: z.string(),
  summary: z.string(),
  image: z.string().url(),
  createdAt: dateSchema,
  updatedAt: dateSchema.optional(),
});

type BlogFrontMatter = z.infer<typeof blogFrontMatterSchema>;

export type MarkdownFile = {
  path: string;
  slug: string;
  data: BlogFrontMatter | Error;
  content: string;
};

export class GetMarkdownFilesFromFs
  implements IUseCase<GetMarkdownFilesFromFsCommand>
{
  async execute(
    command: GetMarkdownFilesFromFsCommand
  ): Promise<MarkdownFile[]> {
    let baseDir: string | undefined;
    try {
      baseDir = realpathSync(command.baseDir);
    } catch (e) {
      throw new Error(`Base directory not found: ${command.baseDir}`);
    }
    const matchedFiles = fg.stream(['**/*.{md,mdx}'], {
      cwd: baseDir,
      dot: false,
      onlyFiles: true,
      followSymbolicLinks: true,
      ignore: ['**/node_modules/**'],
    });

    const files: MarkdownFile[] = [];

    for await (const relativeFile of matchedFiles) {
      const absolutePath = `${baseDir}/${relativeFile}`;
      const { content, data: matterData } = graymatter(
        readFileSync(absolutePath)
      );

      const result = blogFrontMatterSchema.safeParse(matterData);
      const data = match(result)
        .with({ success: false }, ({ error }) => error)
        .with({ success: true }, ({ data }) => data)
        .exhaustive();

      files.push({
        path: relativeFile.toString(),
        slug: 'hello',
        data: data,
        content,
      });
    }

    return files;
  }
}

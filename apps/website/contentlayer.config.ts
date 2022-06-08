// Till https://github.com/import-js/eslint-plugin-import/issues/1810 is fixed.
// eslint-disable-next-line import/no-unresolved
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import type { ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  url: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Post summary',
      required: false,
    },
    image: {
      type: 'string',
      description: 'Main picture',
      required: false,
    },
  },
  computedFields: computedFields,
}));

export default makeSource({
  contentDirPath: 'src/data/blog',
  documentTypes: [Post],
  markdown: (builder) => {
    builder
      .use(remarkFrontmatter)
      .use(remarkParse)
      .use(remarkGfm)
      .use(remark2rehype)
      .use(rehypeCodeTitles)
      .use(rehypePrism)
      .use([
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ])
      .use(rehypeStringify);
  },
});

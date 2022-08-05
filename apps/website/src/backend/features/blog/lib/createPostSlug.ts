import slugify from 'slugify';

export const createPostSlug = (postTitle: string) => {
  return slugify(postTitle, { lower: true, trim: true });
};

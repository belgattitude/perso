import axios from 'axios';
import type { SearchPostsQuery } from '@/backend/features/blog/SearchPosts.query';
import type { JsonApiResponse } from '@/lib/api/json-api';

type SearchPosts = Awaited<ReturnType<SearchPostsQuery['execute']>>;

export const searchBlog = async () => {
  return await axios
    .get<JsonApiResponse<SearchPosts>>('/api/blog/search', {
      responseType: 'json',
    })
    .then((res) => res.data.data);
};

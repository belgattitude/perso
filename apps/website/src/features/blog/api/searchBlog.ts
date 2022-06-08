import axios from 'axios';
import type { SearchPosts } from '@/backend/features/blog/SearchPosts.query';
import type { JsonApiResponse } from '@/lib/api/json-api';

export const searchBlog = async () => {
  return await axios
    .get<JsonApiResponse<SearchPosts>>('/api/blog/search', {
      responseType: 'json',
    })
    .then((res) => res.data.data);
};

import axios from 'axios';

import { API_KEY, BASE_URL, PER_PAGE } from 'constants';

const pixabayInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    per_page: PER_PAGE,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

const fetchImage = async ({ query, page = 1 }) => {
  const { data } = await pixabayInstance.get('/', {
    params: {
      q: query,
      page,
    },
  });
  return data;
};

export default fetchImage;

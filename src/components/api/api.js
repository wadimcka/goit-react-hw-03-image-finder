import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38631130-27e1bc4ae57544a30c421ce1d';

const requestApi = async (searchValue, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load.');
  }

  const data = response.data;

  return data;
};

export default requestApi;

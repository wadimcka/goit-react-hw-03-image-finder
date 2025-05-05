export const API_KEY = '38718917-264583084f4f4e3ea3ed33372';

export const BASE_URL = 'https://pixabay.com/api/';

export const PER_PAGE = 12;

export const STATES = {
  idle: 'idle',
  loading: 'loading',
  resolved: 'resolved',
  rejected: 'rejected',
};

export const MESSAGES = {
  searchPrompt: 'Enter a query to search for images',
  noResults: query => `No images found for "${query}"!`,
  successResults: total => `We found ${total} photo you request!`,
  error: msg => `Sorry, there's been an error ${msg}`,
  rest: msg => `${msg} photos left on your request`,
};

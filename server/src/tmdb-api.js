import 'isomorphic-fetch';
import generateUrl from './url';

const apiKey = 'db717dc2c53d683703d7226b8638375c';
const apiUrl = 'https://api.themoviedb.org/3';

const api = {
  createUrl(endpoint, queryObject) {
    return generateUrl(`${apiUrl}${endpoint}`, queryObject);
  },
  async search(query) {
    const url = this.createUrl('/search/movie', {
      api_key: apiKey,
      query,
    });

    return fetch(url)
      .then(response => response.json());
  },
  async getMovie(movieId) {
    const url = this.createUrl(`/movie/${movieId}`, {
      api_key: apiKey,
    });

    return fetch(url)
      .then(response => response.json());
  },
};

export default api;

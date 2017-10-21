// Creates all the api requests
import axios from 'axios';

const ROOT_URL = 'https://blend.media/api/videos?q=';

export function fetchData({ id = '' }) {
  return axios.get(`${ ROOT_URL }${ id }`);
}

export default {
  fetchData,
};

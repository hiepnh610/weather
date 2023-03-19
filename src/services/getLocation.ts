import axios from 'axios';

export const fetchLocation = async (q: string) => {
  return axios
    .get('/geo/1.0/direct', { params: { q } })
    .then((res) => res.data);
};

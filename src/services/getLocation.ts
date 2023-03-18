import axios from 'axios';

const domain = process.env.REACT_APP_WEATHER_DOMAIN_API;
const appid = process.env.REACT_APP_WEATHER_APP_ID;

export const fetchLocation = async (q: string) => {
  return axios
    .get(`${domain}/geo/1.0/direct`, { params: { q, appid } })
    .then((res) => res.data);
};

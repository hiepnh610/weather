import axios from 'axios';

export const fetchCurrentWeather = async (lat: number, lon: number) => {
  return axios
    .get('/data/2.5/weather', { params: { lat, lon } })
    .then((res) => res.data);
};

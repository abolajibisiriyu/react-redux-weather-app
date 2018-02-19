import axios from 'axios';

const API_KEY = '2081edaafdf7af460e1b5be3f67a4b3b';

const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(location) {
  const url = `${BASE_URL}&q=${location}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

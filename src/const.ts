import { WeatherTabIdType, WeatherTabType } from 'types';

export const domain: string = process.env.REACT_APP_WEATHER_DOMAIN_API!;

export const appid: string = process.env.REACT_APP_WEATHER_APP_ID!;

export const weatherTabId: WeatherTabIdType = {
  today: 'today',
  tomorrow: 'tomorrow',
  week: 'week',
};

export const weatherTab: WeatherTabType[] = [
  {
    id: weatherTabId.today,
    text: 'Today',
  },
  {
    id: weatherTabId.tomorrow,
    text: 'Tomorrow',
  },
  {
    id: weatherTabId.week,
    text: 'Next 7 days',
  },
];

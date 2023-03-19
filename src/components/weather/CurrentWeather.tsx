import React, { FC, useState } from 'react';

import { weatherTab } from 'const';
import { WeatherTabType } from 'types';
import TodayWeatherComponent from './TodayWeather';
import TomorrowWeatherComponent from './TomorrowWeather';
import WeekWeatherComponent from './WeekWeather';

const CurrentWeatherComponent: FC = () => {
  const [tabActive, setTabActive] = useState<WeatherTabType>(weatherTab[0]);

  return (
    <div>
      <nav className="mb-4">
        <ul className="flex">
          {weatherTab.map((tab: WeatherTabType) => (
            <li key={tab.id} className="mr-4">
              <button
                onClick={() => setTabActive(tab)}
                type="button"
                className={`${
                  tabActive.id !== tab.id ? 'opacity-50 ' : ''
                }text-white`}
              >
                {tab.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <TodayWeatherComponent />

      <TomorrowWeatherComponent />

      <WeekWeatherComponent />
    </div>
  );
};

export default CurrentWeatherComponent;

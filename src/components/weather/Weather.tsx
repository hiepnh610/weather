import React, { FC, useState } from 'react';

import { weatherTab } from 'const';
import { WeatherTabType } from 'types';
import TodayWeatherComponent from './TodayWeather';
import TomorrowWeatherComponent from './TomorrowWeather';
import WeekWeatherComponent from './WeekWeather';

const WeatherComponent: FC = () => {
  const [tabActive, setTabActive] = useState<WeatherTabType>(weatherTab[0]);

  return (
    <>
      <div className="flex mb-4 justify-between items-center">
        <nav>
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

        <nav className="bg-dark-800 rounded-full">
          <ul className="flex">
            <li>
              <button
                type="button"
                className="text-dark-300 px-5 py-3 bg-white rounded-full"
              >
                Forecast
              </button>
            </li>

            <li>
              <button type="button" className="text-white px-5 py-3">
                Air quality
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <TodayWeatherComponent />

      <TomorrowWeatherComponent />

      <WeekWeatherComponent />
    </>
  );
};

export default WeatherComponent;

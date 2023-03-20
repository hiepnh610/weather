import React, { FC, useState } from 'react';

import { durationWeatherTab, weatherTabId } from 'const';
import { WeatherTabType } from 'types';

import TodayWeatherComponent from 'components/weather/TodayWeather';
import TomorrowWeatherComponent from 'components/weather/TomorrowWeather';
import WeekWeatherComponent from 'components/weather/WeekWeather';

const WeatherComponent: FC = () => {
  const [durationWeather, setDurationWeather] = useState<WeatherTabType>(
    durationWeatherTab[0]
  );

  const renderDurationWeather = (duration: WeatherTabType) => {
    switch (duration.id) {
      case weatherTabId.tomorrow:
        return <TomorrowWeatherComponent />;

      case weatherTabId.week:
        return <WeekWeatherComponent />;

      default:
        return <TodayWeatherComponent />;
    }
  };

  return (
    <>
      <div className="flex mb-4 justify-between items-center">
        <nav>
          <ul className="flex">
            {durationWeatherTab.map((tab: WeatherTabType) => (
              <li key={tab.id} className="mr-4">
                <button
                  onClick={() => setDurationWeather(tab)}
                  type="button"
                  className={`${
                    durationWeather.id !== tab.id ? 'opacity-50 ' : ''
                  }text-white hover:opacity-100 transition ease-in-out duration-300`}
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
                className="text-dark-300 px-6 py-2 bg-pale-blue-300 rounded-full"
              >
                Forecast
              </button>
            </li>

            <li>
              <button
                type="button"
                className="transition ease-in-out duration-300 text-white px-6 py-2 hover:bg-pale-blue-300 hover:text-dark-300 rounded-full"
              >
                Air quality
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {renderDurationWeather(durationWeather)}
    </>
  );
};

export default WeatherComponent;

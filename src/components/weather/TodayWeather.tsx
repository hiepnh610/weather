import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { MdOutlineWbSunny } from 'react-icons/md';

import useLocationStore from 'database/useLocationStore';
import { fetchCurrentWeather } from 'services/getCurrentWeather';

const TodayWeatherComponent: FC = () => {
  const { lat, lon } = useLocationStore((state) => state.currentLocation);

  const { refetch, data, isFetching } = useQuery(
    ['currentWeather'],
    () => fetchCurrentWeather(lat, lon),
    { enabled: false }
  );

  console.log('data', data);

  useEffect(() => {
    if (lat && lon) {
      refetch();
    }
  }, [lat, lon, refetch]);

  return (
    <div className="text-white flex">
      <div className="w-60 h-60 rounded-4xl bg-pale-blue-300 overflow-hidden">
        <div className="bg-pale-blue-600 px-6 py-4 text-dark-900 font-medium flex justify-between">
          <span>Monday</span>

          <span>11:42PM</span>
        </div>

        <div className="flex items-center text-center py-4">
          <div className="flex-1">
            <span className="text-6xl text-dark-900 font-medium">16°</span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <MdOutlineWbSunny size={56} color="#101014" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherComponent;

import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

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
    <div className="text-white">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      temporibus at nobis! Impedit tenetur dolore ipsa facere qui expedita quia
      autem velit dignissimos asperiores alias, ut quo debitis temporibus nam.
    </div>
  );
};

export default TodayWeatherComponent;
